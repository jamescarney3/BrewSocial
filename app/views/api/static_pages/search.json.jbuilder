json.total_count @search_results.length

json.results do
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "User"
      json.partial! "api/users/user", user: search_result.searchable
      json._type "User"
    elsif search_result.searchable_type == "Recipe"
      json.partial! "api/recipes/recipe", recipe: search_result.searchable
      json._type "Recipe"
    end
  end
end
