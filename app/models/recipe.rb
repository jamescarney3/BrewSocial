class Recipe < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title, :procedure, :style, :ingredient_names]

  pg_search_scope :search_by_ingredients,
    associated_against: {
      ingredients: :name
    },
    using: {
      tsearch: {
        dictionary: "english",
        prefix: true
      },
      trigram: {
        threshold: 0.2
      }
    }

  pg_search_scope :search_by_name,
    against: :title,
    using: {
      tsearch: {
        dictionary: "english",
        prefix: true
      },
      trigram: {
        threshold: 0.2
      }
    }

  pg_search_scope :search_by_style,
    against: :style,
    using: {
      tsearch: {
        dictionary: "english",
        prefix: true
      },
      trigram: {
        threshold: 0.2
      }
    }

  pg_search_scope :search_by_all,
    against: [:title, :style, :procedure],
    associated_against: {ingredients: :name},
    using: {
      tsearch: {
        dictionary: "english",
        prefix: true
      },
      trigram: {
        threshold: 0.2
      }
    }

  validates :author_id, :title, :style, :procedure, presence: true
  validates :is_private, inclusion: {in: [true, false]}

  has_attached_file :image, styles: {
    large: "300x300>",
    medium: "150x150>",
    thumb: "60x60>"
  }, default_url: "beer.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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

  def ingredient_names
    ingredients.map{|ingredient| ingredient.name }
  end

end
