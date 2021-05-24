class Post < ApplicationRecord
  belongs_to :category
  has_one_attached :image
  @var = Post.where(category_id: CATEGORY::JobPosting_ID).order(updated_at: 'ASC').first
  if @var === nil
    JobPosting = nil
    JobPosting_Update = Date.new(2020, 4, 1)
  else
    JobPosting = @var
    JobPosting_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::CompanyStatute_ID).order(updated_at: 'ASC').first
  if @var === nil
    CompanyStatute = nil
    CompanyStatute_Update = Date.new(2020, 4, 1)
  else
    CompanyStatute = @var
    CompanyStatute_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::OfficerList_ID).order(updated_at: 'ASC').first
  if @var === nil
    OfficerList = nil
    OfficerList_Update = Date.new(2020, 4, 1)
  else
    OfficerList = @var
    OfficerList_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::PaymentRule_ID).order(updated_at: 'ASC').first
  if @var === nil
    PaymentRule = nil
    PaymentRule_Update = Date.new(2020, 4, 1)
  else
    PaymentRule = @var
    PaymentRule_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::PartiSelfAssessment_ID).order(updated_at: 'ASC').first
  if @var === nil
    PartiSelfAssessment = nil
    PartiSelfAssessment_Update = Date.new(2020, 4, 1)
  else
    PartiSelfAssessment = @var
    PartiSelfAssessment_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::PianiSelfAssessment_ID).order(updated_at: 'ASC').first
  if @var === nil
    PianiSelfAssessment = nil
    PianiSelfAssessment_Update = Date.new(2020, 4, 1)
  else
    PianiSelfAssessment = @var
    PianiSelfAssessment_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::PartiAdmission_ID).order(updated_at: 'ASC').first
  if @var === nil
    PartiAdmission_PDF = nil
    PartiAdmission_PDF_Update = Date.new(2020, 4, 1)
  else
    PartiAdmission_PDF = @var
    PartiAdmission_PDF_Update = @var.updated_at
  end
  @var = Post.with_attached_image.where(category_id: CATEGORY::PianiAdmission_ID).order(updated_at: 'ASC').first
  if @var === nil
    PianiAdmission_PDF = nil
    PianiAdmission_PDF_Update = Date.new(2020, 4, 1)
  else
    PianiAdmission_PDF = @var
    PianiAdmission_PDF_Update = @var.updated_at
  end
end
