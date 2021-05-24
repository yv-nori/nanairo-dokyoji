class NanairoController < FormController
  before_action :common
  before_action :name
  def about
    @companyStatute = Post::CompanyStatute
    @officerList = Post::OfficerList
    @paymentRule = Post::PaymentRule
    @partiSelfAssessment = Post::PartiSelfAssessment
    @pianiSelfAssessment = Post::PianiSelfAssessment
  end
  def support
    @items = [SUPPORT::PARTI, SUPPORT::PIANI]
    @slider = { options: RECIPE::OPTIONS, items: RECIPE::ITEMS[0..10] }
  end
  def contact
    @contact = Contact.new()
    public_method(:contact).super_method.call(contact_create_nanairo_index_path)
  end
  def contact_create
    public_method(:contact_create).super_method.call(contact_create_nanairo_index_path, contact_nanairo_index_path, '法人のページ')
  end
  def recipe
    @recipe = RECIPE::ITEMS
  end
  def recruit
    @contact_recruit = ContactRecruit.new()
    recruit_new
    @job_posting = Post.where(category_id: CATEGORY::JobPosting_ID).order(updated_at: :desc).limit(1)
  end
  def recruit_new
    @staff = [STAFF::PARTI[0],STAFF::PARTI[1],STAFF::PIANI[2],STAFF::PIANI[3]]
    public_method(:recruit).super_method.call(recruit_create_nanairo_index_path)
  end
  def recruit_create
    public_method(:recruit_create).super_method.call(recruit_create_nanairo_index_path, recruit_nanairo_index_path, '法人のページ')
  end
  def name
    @name = NAME::NANAIRO
  end
  def common
    @header = COMMON::HEADER_NANAIRO
    @footer = COMMON::FOOTER_NANAIRO
  end
  private
  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
