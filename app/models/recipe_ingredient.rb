class RecipeIngredient < ActiveRecord::Base
  validates :recipe_id, :ingredient_id, :amount, :unit, presence: true
  

  belongs_to(
    :recipe,
    class_name: "Recipe",
    foreign_key: :recipe_id,
    primary_key: :id
  )

  belongs_to(
    :ingredient,
    class_name: "Ingredient",
    foreign_key: :ingredient_id,
    primary_key: :id
  )
end
