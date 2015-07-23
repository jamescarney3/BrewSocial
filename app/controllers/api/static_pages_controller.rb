class Api::StaticPagesController < ApplicationController

  def search
    @search_results = PgSearch
      .multisearch(params[:query])

    render json: @search_results
  end

  def search_by_ingredients
    @search_results = Recipe.search_by_ingredients(params[:query])

    render json: @search_results
  end

end
