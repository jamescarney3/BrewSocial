class Api::RecipeIngredientsController < ApplicationController

  def create
    @recipe_ingredient = RecipeIngredient.new(recipe_ingredient_params)
    if @recipe_ingredient.save
      render json: @recipe_ingredient
    else
      render json: @recipe_ingredient.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @recipe_ingredients = RecipeIngredient.all
    render json: @recipe_ingredients
  end

  def show
    @recipe_ingredient = RecipeIngredient.find(params[:id])
    render :show
  end

  def destroy
    @recipe = RecipeIngredient.find(params[:id])
    @recipe.destroy
    render json: @recipe
  end

  private

  def recipe_ingredient_params
    params.require(:recipe_ingredient).permit(:recipe_id, :ingredient_id, :amount, :unit)
  end

  def search_params
    #does nothing yet....
  end

end
