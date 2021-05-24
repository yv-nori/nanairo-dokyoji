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
  if @var === nil
    JobPosting = nil
    JobPosting_Update = Date.new(2020, 4, 1)
  else
    JobPosting = @var
    JobPosting_Update = @var.updated_at
  end
end
