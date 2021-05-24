class PartiController < PostsController
  before_action :common
  before_action :name
  def about
    @items = ABOUT::PARTI
  end
  def admission
    @cost_uniforms = CostUniform.all
    @cost_ages = CostAge.all
    @goods_cost = @cost_ages.where(name: '用品代').first
    @other_costs = @cost_ages.where.not(name: '用品代')
    @admission_pdf = Post::PartiAdmission_PDF
  end
  def belong
    @posts = Post.where(category_id: Category::PartiNotice_ID).order(release_date: 'DESC').limit(5)
    @links = {
      notice: belong_notice_parti_index_path,
      letter: belong_letter_parti_index_path,
      movie: belong_movie_parti_index_path,
      format: belong_format_parti_index_path,
    }
  end
  def belong_notice
    post_public(Category::PartiNotice_ID, 'Notice', 'お知らせ一覧')
  end
  def belong_letter
    post_private(Category::PartiLetter_ID, belong_letter_parti_index_path, 'Letter', 'おたより一覧')
  end
  def belong_movie
    post_private(Category::PartiMovie_ID, belong_movie_parti_index_path, 'Movie', '動画配信の一覧')
  end
  def belong_format
    post_public(Category::PartiFormat_ID, 'Format', 'お届け様式一覧')
  end
  def show
  end
  def contact
    @contact = Contact.new()
    public_method(:contact).super_method.call(contact_create_parti_index_path)
  end
  def contact_create
    public_method(:contact_create).super_method.call(contact_create_parti_index_path, contact_parti_index_path, 'パルティのページ')
  end
  def eat_education
    @slider = { options: RECIPE::OPTIONS, items: RECIPE::ITEMS[0..10] }
    @food_staff = FOOD_STAFF::PARTI
  end
  def event
    @items = EVENT::PARTI
  end
  def one_day
    @items = ONE_DAY::COMMON
  end
  def index
    @slider = { options: PHOTO_GALLERY::OPTIONS_PARTI, items: PHOTO_GALLERY::ITEMS_PARTI }
  end
  def support
    @items = [SUPPORT::PARTI]
    @slider = { options: RECIPE::OPTIONS, items: RECIPE::ITEMS[0..10] }
  end
  def recipe
    @recipe = RECIPE::ITEMS
  end
  def recruit
    @contact_recruit = ContactRecruit.new()
    recruit_new
    @job_posting = Post.where(category_id: Category::JobPosting_ID).order(updated_at: :desc).first
  end
  def recruit_new
    @staff = STAFF::PARTI
    public_method(:recruit).super_method.call(recruit_create_parti_index_path)
  end
  def recruit_create
    public_method(:recruit_create).super_method.call(recruit_create_parti_index_path, recruit_parti_index_path, 'パルティのページ')
  end
  def name
    @name = NAME::PARTI
  end
  def common
    @header = COMMON::HEADER_PARTI
    @footer = COMMON::FOOTER_PARTI
  end
  private
  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
