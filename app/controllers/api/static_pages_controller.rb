class Api::StaticPagesController < ApplicationController

  def search_recipes
    # per limits are artificially depressed due to limited seed data
    case params[:search_type]
    when "name"
      @search_results = Recipe.search_by_name(params[:query]).
        where("is_private = ? OR author_id = ?", false, (current_user ? current_user.id : nil)).
        page(params[:page]).per(5)
    when "style"
      @search_results = Recipe.search_by_style(params[:query]).
        where("is_private = ? OR author_id = ?", false, (current_user ? current_user.id : nil)).
        page(params[:page]).per(5)
    when "ingredient"
      @search_results = Recipe.search_by_ingredients(params[:query]).
        where("is_private = ? OR author_id = ?", false, (current_user ? current_user.id : nil)).
        page(params[:page]).per(5)
    when "all"
      @search_results = Recipe.search_by_all(params[:query]).
        where("is_private = ? OR author_id = ?", false, (current_user ? current_user.id : nil)).
        page(params[:page]).per(5)
    end
    render :recipe_results
  end

  def search_users
    @search_results = User.search_by_name(params[:query]).
      page(params[:page]).per(5)
    render :user_results
  end

  def multisearch
    @search_results = multiscrub!(PgSearch.multisearch(params[:query]))
    @search_results = PgSearch::Document.where(id: @search_results.map(&:id)).page(params[:page]).per(5)

    render :multisearch_results
  end

  private

  def multiscrub!(results)
    results.select do |result|
      result.searchable_type == "User" ||
        !result.searchable.is_private ||
        result.searchable.author_id == (current_user ? current_user.id : nil)
    end
  end

end
