class Api::StaticPagesController < ApplicationController

  def search
    @search_results = PgSearch
      .multisearch(params[:query])

    render :search
  end

  def search_recipes
    case params[:search_type]
    when "name"
      @search_results = Recipe.search_by_name(params[:query])
    when "style"
      @search_results = Recipe.search_by_style(params[:query])
    when "ingredient"
      @search_results = Recipe.search_by_ingredients(params[:query])
    when "all"
      @search_results = Recipe.search_by_all(params[:query])
    end

    render :recipe_results
  end

  def search_users

  end

end
