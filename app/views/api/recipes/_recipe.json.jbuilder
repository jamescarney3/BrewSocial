json.(recipe, :id, :title, :style, :procedure, :is_private, :author_id)
json.image_url asset_path(recipe.image.url(:original))
