class Recipe < ActiveRecord::Base
  include PgSearch

  multisearchable against: [:title, :procedure]

  pg_search_scope :search_by_ingredients, associated_against: {
    ingredients: :name
  }

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

  has_many(
    :ingredients,
    through: :recipe_ingredients,
    source: :ingredient
  )

  has_many(
    :recipe_adds,
    class_name: "RecipeAdd",
    foreign_key: :recipe_id,
    primary_key: :id
  )

  has_many(
    :users,
    through: :recipe_adds,
    source: :user
  )

  def add_ingredient(ingredient, amount, unit)
    self.recipe_ingredients << RecipeIngredient.new(
      ingredient_id: ingredient.id,
      amount: amount,
      unit: unit)
    ingredient
  end
end
