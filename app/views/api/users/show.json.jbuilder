json.partial! "api/users/user", user: @user

json.authored_recipes do
  json.array! @user.authored_recipes do |recipe|
    json.extract! recipe, :id, :title
  end
end
