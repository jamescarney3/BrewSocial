class RecipeAdd < ActiveRecord::Base
  validates :user_id, :recipe_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :recipe,
    class_name: "Recipe",
    foreign_key: :recipe_id,
    primary_key: :id
  )
  
end
