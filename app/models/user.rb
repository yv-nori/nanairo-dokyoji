class User < ApplicationRecord
  has_many :accepts
  has_secure_password validations: true
  validates :name, presence: true, uniqueness: true

  def self.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def self.encrypt(token)
    Digest::SHA256.hexdigest(token.to_s)
  end
  NanairoRoot_ID = User.where(name: 'nanairo_root').first.id
  PartiUser_ID = User.where(name: 'parti_user').first.id
  PianiUser_ID = User.where(name: 'piani_user').first.id
end
