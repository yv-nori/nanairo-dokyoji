class CreateCostAges < ActiveRecord::Migration[6.0]
  def change
    create_table :cost_ages do |t|
      t.string :name, unique: true, index: true, null: false
      t.integer :cost_age_0, null: false
      t.integer :cost_age_1, null: false
      t.integer :cost_age_2, null: false
      t.integer :cost_age_3, null: false
      t.integer :cost_age_4, null: false
      t.integer :cost_age_5, null: false

      t.timestamps
    end
  end
end
