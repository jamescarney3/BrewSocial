json.total_count @search_results.total_count

json.search_results do
  json.array! @search_results do |search_result|
    json.extract! search_result, :id, :title, :style, :author_id
    json.author_name search_result.author.username
    json.thumb asset_path(search_result.image.url(:thumb))
  end
end
