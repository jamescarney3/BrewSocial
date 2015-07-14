class Ingredient < ActiveRecord::Base
  validates :name, :role, presence: true

  enum role: [:other, :malt, :hops, :adjunct]
end
