class ContactRecruit < ApplicationRecord
  VALID_POSTAL_REGEX = /\A[0-9]{3}-[0-9]{4}\z/

  with_options presence: true do
    validates :name
    validates :name_kana
    validates :tel
    validates :email, confirmation: true
    validates :postal_code, format: { with: VALID_POSTAL_REGEX }
  end
end
