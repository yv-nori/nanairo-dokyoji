class PianiController < PostsController
  before_action :common
  before_action :name
  before_action :get_job_posting, only: [:recruit, :recruit_new, :recruit_create]
  def about
    @items = ABOUT::PIANI
  end
  def admission
    @cost_uniforms = CostUniform.all
    @cost_ages_1 = CostAge.where(cost_type: 1)
    @cost_ages_2 = CostAge.where(cost_type: 2)
    @admission_pdf = Post::PianiAdmission_PDF
    @items = ADMISSION::PARTI
  end
  def belong
    @posts = Post.where(category_id: Category_id::PianiNotice_ID).order(release_date: 'DESC').limit(5)
    @links = {
      notice: belong_notice_piani_index_path,
      letter: belong_letter_piani_index_path,
      movie: belong_movie_piani_index_path,
      format: belong_format_piani_index_path,
    }
  end
  def belong_notice
    post_public(Category_id::PianiNotice_ID, 'Notice', 'お知らせ一覧')
  end
  def belong_letter
    post_private(Category_id::PianiLetter_ID, belong_letter_piani_index_path, 'Letter', 'おたより一覧')
  end
  def belong_movie
    post_private(Category_id::PianiMovie_ID, belong_movie_piani_index_path, 'Movie', '動画配信の一覧')
  end
  def belong_format
    post_public(Category_id::PianiFormat_ID, 'Format', 'お届け様式一覧')
  end
  def contact
    @contact = Contact.new()
    public_method(:contact).super_method.call(contact_create_piani_index_path)
  end
  def contact_create
    public_method(:contact_create).super_method.call(contact_create_piani_index_path, contact_piani_index_path, 'ピアニィのページ')
  end
  def eat_education
    @slider = { options: RECIPE::OPTIONS, items: RECIPE::ITEMS[0..10] }
    @food_staff = FOOD_STAFF::PIANI
  end
  def event
    @items = EVENT::PIANI
  end
  def for_admission
    @items = {
      toddler_link: 'https://www.youtube.com/embed/fwZdHAe7I30?start=1',
      infant_link: 'https://www.youtube.com/embed/qZgur7QBRp4?start=1'
    }
  end
  def one_day
    @items = ONE_DAY::COMMON
  end
  def index
    @slider = { options: PHOTO_GALLERY::OPTIONS_PIANI, items: PHOTO_GALLERY::ITEMS_PIANI }
  end
  def support
    @items = [SUPPORT::PIANI]
    @slider = { options: RECIPE::OPTIONS, items: RECIPE::ITEMS[0..10] }
  end
  def recipe
    @recipe = RECIPE::ITEMS
  end
  def recruit
    @contact_recruit = ContactRecruit.new()
    recruit_new
  end
  def recruit_new
    @staff = STAFF::PIANI
    public_method(:recruit).super_method.call(recruit_create_piani_index_path)
  end
  def recruit_create
    public_method(:recruit_create).super_method.call(recruit_create_piani_index_path, recruit_piani_index_path, 'ピアニィのページ')
  end
  def name
    @name = NAME::PIANI
  end
  def common
    @header = COMMON::HEADER_PIANI
    @footer = COMMON::FOOTER_PIANI
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
