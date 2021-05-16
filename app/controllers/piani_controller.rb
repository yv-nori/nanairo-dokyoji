class PianiController < FormController
  before_action :common
  before_action :name
  def about
    @items = ABOUT::PIANI
  end
  def admission
    @items = ADMISSION::COMMON
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
  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
