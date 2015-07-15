class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.integer :role, default: 0
      t.integer :recipe_inclusion_count, default: 0, null: false

      t.timestamps null: false
    end

    add_index :ingredients, :name, unique: true
  end
end
