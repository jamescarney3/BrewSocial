class CreateRecipeAdds < ActiveRecord::Migration
  def change
    create_table :recipe_adds do |t|
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps null: false
    end

    add_index :recipe_adds, :user_id
    add_index :recipe_adds, :recipe_id
  end
end
