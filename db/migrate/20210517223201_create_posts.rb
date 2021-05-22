class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false, index: true
      t.text :text
      t.datetime :release_date, default: -> { 'CURRENT_TIMESTAMP' }, null:true
      t.binary :delete_flag
      t.references :category, null: true
      t.timestamps
    end
  end
end
