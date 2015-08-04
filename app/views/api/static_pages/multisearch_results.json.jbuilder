json.total_count @search_results.total_count

json.search_results do
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Recipe"
      json.extract! search_result.searchable, :id, :title, :style, :author_id
      json.author_name search_result.searchable.author.username
      json.thumb asset_path(search_result.searchable.image.url(:thumb))
    elsif search_result.searchable_type == "User"
      json.extract! search_result.searchable, :username, :id
      json.recipe_count search_result.searchable.authored_recipes.length
      json.thumb search_result.searchable.avatar.url(:thumb)
    end
    json._type search_result.searchable_type
  end
end
