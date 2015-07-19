json.partial! "api/recipes/recipe", recipe: @recipe

json.ingredient_list do
  json.array! @recipe.recipe_ingredients do |recipe_ingredient|
    json.extract! recipe_ingredient, :amount, :unit
    json.name recipe_ingredient.ingredient.name
  end
end
