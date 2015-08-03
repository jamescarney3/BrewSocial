class Api::RecipesController < ApplicationController

  def index
    @recipes = Recipe.all.select{ |recipe| !recipe.is_private || (current_user && recipe.author_id == current_user.id) }
    render json: @recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def new
    @recipe = Recipe.new
    render json: @recipe
  end

  def edit
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(recipe_params)
    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render json: @recipe
  end

  def random
    ids = Recipe.where(is_private: false).pluck("id").sample(params[:num].to_i)
    @recipes = Recipe.find(ids)
    render :random
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :style, :procedure, :is_private, :author_id, :image)
  end

  def _scrub_for_privacy
    @recipes = @recipes.select do |el|
      !el.is_private || (current_user && el.author_id == current_user.id)
    end
  end

end
