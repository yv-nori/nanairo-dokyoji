class Contact < ApplicationRecord
  with_options presence: true do
    validates :name
    validates :email, confirmation: true
  end
end
