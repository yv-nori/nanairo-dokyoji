class NanairoController < FormController
  before_action :common
  before_action :name
  before_action :get_job_posting, only: [:recruit, :recruit_new, :recruit_create]
  def index
    flash.now[:alert] = User.find(3).name
  end
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
  def get_job_posting
    @job_posting = Post.where(category_id: Category_id::JobPosting_ID).order(updated_at: :desc).first
  end
  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
