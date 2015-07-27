json.array! @recipes do |recipe|
  json.partial! "api/recipes/recipe", recipe: recipe
  json.recipe_ingredients do
    json.array! recipe.recipe_ingredients do |recipe_ingredient|
      json.partial! "api/recipe_ingredients/recipe_ingredient", recipe_ingredient: recipe_ingredient
    end
  end
end
