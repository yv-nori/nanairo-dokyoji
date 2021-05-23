class Post < ApplicationRecord
  belongs_to :category
  has_one_attached :image
  JobPosting_Update = Post.where(category_id: Category::JobPosting_ID).order(updated_at: 'ASC').first.updated_at
  CompanyStatute_Update = Post.where(category_id: Category::CompanyStatute_ID).order(updated_at: 'ASC').first.updated_at
  OfficerList_Update = Post.where(category_id: Category::OfficerList_ID).order(updated_at: 'ASC').first.updated_at
  PaymentRule_Update = Post.where(category_id: Category::PaymentRule_ID).order(updated_at: 'ASC').first.updated_at
  PartiSelfAssessment_Update = Post.where(category_id: Category::PartiSelfAssessment_ID).order(updated_at: 'ASC').first.updated_at
  PianiSelfAssessment_Update = Post.where(category_id: Category::PianiSelfAssessment_ID).order(updated_at: 'ASC').first.updated_at
end
