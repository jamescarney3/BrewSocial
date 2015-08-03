json.partial! "api/recipes/recipe", recipe: @recipe
json.large asset_path(@recipe.image.url(:large))

json.recipe_ingredients do
  json.array! @recipe.recipe_ingredients do |recipe_ingredient|
    json.partial! "api/recipe_ingredients/recipe_ingredient", recipe_ingredient: recipe_ingredient
  end
end

json.author do
  json.extract! @recipe.author, :id, :username
end

json.users do
  json.array! @recipe.users do |user|
    json.extract! user, :id, :username
  end
end
