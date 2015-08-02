class Ingredient < ActiveRecord::Base
  validates :name, presence: true
  #validates :role, presence: true

  enum role: [:other, :malt, :hops, :yeast, :adjunct]

  has_many(
    :recipe_ingredients,
    class_name: "RecipeIngredient",
    foreign_key: :ingredient_id,
    primary_key: :id
  )

  has_many(
    :recipes,
    through: :recipe_ingredients,
    source: :recipe
  )

end
