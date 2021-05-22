class CreateAccepts < ActiveRecord::Migration[6.0]
  def change
    create_table :accepts do |t|
      t.references :user, null: false
      t.references :category, null: false
      t.timestamps
    end
  end
end
