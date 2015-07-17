class Api::RecipesController < ApplicationController

  def show
    @recipe = Recipe.find(params[:id])
    # render json: @recipe
    render :show
  end

  def new
    @recipe = Recipe.new
    render json: @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :style, :procedure, :is_private, :author_id)
  end
end
