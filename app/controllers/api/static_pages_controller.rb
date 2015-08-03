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
    @search_results = User.search_by_name(params[:query])
    render :user_results
  end

end
