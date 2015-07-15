class Recipe < ActiveRecord::Base
  validates :author_id, :title, :style, :procedure, presence: true
  validates :is_private, inclusion: {in: [true, false]}

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :recipe_ingredients,
    class_name: "RecipeIngredient",
    foreign_key: :recipe_id,
    primary_key: :id
  )
end
