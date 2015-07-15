class CreateRecipeAdds < ActiveRecord::Migration
  def change
    create_table :recipe_adds do |t|

      t.timestamps null: false
    end
  end
end
