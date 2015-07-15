class Api::RecipesController < ApplicationController

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :style, :procedure, :is_private)
  end
end
