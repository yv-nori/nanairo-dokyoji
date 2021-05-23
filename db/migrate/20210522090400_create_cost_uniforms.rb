class CreateCostUniforms < ActiveRecord::Migration[6.0]
  def change
    create_table :cost_uniforms do |t|
      t.string :name, unique: true, index: true, null: false
      t.integer :cost, null: false

      t.timestamps
    end
  end
end
