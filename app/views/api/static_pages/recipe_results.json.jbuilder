json.array! @search_results do |search_result|
  json.extract! search_result, :title, :style, :author_id
  json.author_name search_result.author.username
  json.thumb search_result.image.url(:thumb)
end
