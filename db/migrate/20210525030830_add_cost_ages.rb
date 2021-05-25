class AddCostAges < ActiveRecord::Migration[6.0]
  def change
    add_column :cost_ages, :cost_type, :integer
  end
end
