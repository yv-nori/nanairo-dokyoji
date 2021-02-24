class CreateContactRecruits < ActiveRecord::Migration[6.0]
  def change
    create_table :contact_recruits do |t|
      t.string :name
      t.string :name_kana
      t.string :tel
      t.string :email
      t.string :postal_code
      t.text :address
      t.text :question

      t.timestamps
    end
  end
end
