class Ingredient < ActiveRecord::Base
  validates :name, :role, presence: true

  enum role: [:other, :malt, :hops, :yeast, :adjunct]

  has_many(
    :recipe_ingredients,
    class_name: "RecipeIngredient",
    foreign_key: :ingredient_id,
    primary_key: :id
  )
end
