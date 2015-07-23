json.partial! "api/recipe_ingredients/recipe_ingredient", recipe_ingredient: @recipe_ingredient

json.ingredient do
  json.extract! @recipe_ingredient.ingredient, :id, :name
end
