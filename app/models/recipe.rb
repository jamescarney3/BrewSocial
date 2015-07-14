class Recipe < ActiveRecord::Base
  validates :author_id, :title, :style, :procedure, presence: true
  validates :is_private, inclusion: {in: [true, false]}

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )
end
