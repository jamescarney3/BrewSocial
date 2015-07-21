class Api::RecipeAddsController < ApplicationController

  def index
    @recipe_adds = RecipeAdd.all
    render json: @recipe_adds
  end

  def show
    @recipe_add = RecipeAdd.find(params[:id]);
    render json: @recipe_add
  end

  def create
    @recipe_add = RecipeAdd.new(recipe_add_params);
    if @recipe_add.save
      render json: @recipe_add
    else
      render json: @recipe_add.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe_add = RecipeAdd.find(params[:id]);
    @recipe_add.delete
    render json: @recipe_add
  end

  private

  def recipe_add_params
    params.require(:recipe_add).permit(:user_id, :recipe_id)
  end
end
