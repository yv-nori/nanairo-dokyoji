class Category < ApplicationRecord
  has_many :posts
  has_many :accepts
end
