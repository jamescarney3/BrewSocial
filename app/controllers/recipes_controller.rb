class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render :index
  end

  def new
    @recipe = Recipe.new
    render :new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to recipe_url(@recipe.id)
    else
      render :new
    end
  end

  def edit
    @recipe = Recipe.find(params[:id])
    render :new
  end

  def update
    @recipe = Recipe.new(recipe_params)
    if @recipe.update(recipe_params)
      redirect_to recipe_url(@recipe.id)
    else
      render :new
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    redirect_to recipes_url
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :style, :procedure, :is_private, :author_id)
  end
end
