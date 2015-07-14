class Ingredient < ActiveRecord::Base

  enum role: [:other, :malt, :hops, :adjunct]
end
