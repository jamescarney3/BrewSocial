class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :style, null: false
      t.text :procedure, null: false
      t.boolean :is_private, null: false

      t.timestamps null: false
    end

    add_index :recipes, :title
    add_index :recipes, :author_id
    add_index :recipes, :style
  end
end
