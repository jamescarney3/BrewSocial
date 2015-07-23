json.partial! "api/recipes/recipe", recipe: @recipe

json.recipe_ingredients do
  json.array! @recipe.recipe_ingredients do |recipe_ingredient|
    json.extract! recipe_ingredient, :id, :ingredient_id, :amount, :unit
    json.ingredient do
      json.extract! recipe_ingredient.ingredient, :id, :name
    end
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
