json.total_count @search_results.total_count

json.search_results do
  json.array! @search_results do |search_result|
    json.extract! search_result, :username, :id
    json.recipe_count search_result.authored_recipes.length
    json.thumb search_result.avatar.url(:thumb)
  end
end
