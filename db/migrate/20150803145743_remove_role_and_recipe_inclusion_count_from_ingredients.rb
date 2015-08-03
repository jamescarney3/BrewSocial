class RemoveRoleAndRecipeInclusionCountFromIngredients < ActiveRecord::Migration
  def change
    remove_column :ingredients, :role, :integer
    remove_column :ingredients, :recipe_inclusion_count, :integer
  end
end
