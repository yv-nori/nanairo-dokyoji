class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name, unique: true, index: true, null: false
      t.binary :public
      t.binary :delete_flag
      t.timestamps
    end
  end
end
