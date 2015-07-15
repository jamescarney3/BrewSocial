class IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.all
    render :index
  end

  def new
    @ingredient = Ingredient.new
    render :new
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      redirect_to ingredient_url(@ingredient.id)
    else
      render :new
    end
  end

  def edit
    @ingredient = Ingredient.find(params[:id])
    render :new
  end

  def update
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.update(ingredient_params)
      redirect_to ingredient_url(@ingredient.id)
    else
      render :new
    end
  end

  def show
    @ingredient = Ingredient.find(params[:id])
    render :show
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
    redirect_to ingredients_url
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :role)
  end
end
