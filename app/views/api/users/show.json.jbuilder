json.partial! "api/users/user", user: @user

json.authored_recipes do
  json.array! @user.authored_recipes do |recipe|
    json.extract! recipe, :id, :title
  end
end

json.recipes do
  json.array! @user.recipes do |recipe|
    json.extract! recipe, :id, :title
  end
end

json.recipe_adds do
  json.array! @user.recipe_adds do |recipe_add|
    json.extract! recipe_add, :id, :recipe_id
    json.title recipe_add.recipe.title
  end
end
