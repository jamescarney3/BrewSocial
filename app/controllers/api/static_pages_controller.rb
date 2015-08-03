class Api::StaticPagesController < ApplicationController

  def search_recipes
    case params[:search_type]
    when "name"
      @search_results = Recipe.search_by_name(params[:query])
      _scrub_for_privacy
    when "style"
      @search_results = Recipe.search_by_style(params[:query])
      _scrub_for_privacy
    when "ingredient"
      @search_results = Recipe.search_by_ingredients(params[:query])
      _scrub_for_privacy
    when "all"
      @search_results = Recipe.search_by_all(params[:query])
      _scrub_for_privacy
    end
    render :recipe_results
  end

  def search_users
    @search_results = User.search_by_name(params[:query])
    render :user_results
  end

  private

  def _scrub_for_privacy
    @search_results = @search_results.select do |el|
      el.is_private == false || (current_user && el.author_id == current_user.id)
    end
  end

end
