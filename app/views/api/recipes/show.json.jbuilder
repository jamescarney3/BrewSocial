json.partial! "api/recipes/recipe", recipe: @recipe

json.recipe_ingredients do
  json.array! @recipe.recipe_ingredients do |recipe_ingredient|
    json.extract! recipe_ingredient, :id, :ingredient_id, :amount, :unit
  end
end
