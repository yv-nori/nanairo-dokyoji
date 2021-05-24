class Piani::PostsController < PostsController
  before_action :common
  before_action :name
  def show
    @posts = Post.find(params_id)
    if @posts.category_id === Category_id::PianiLetter_ID ||
        @posts.category_id === Category_id::PianiMovie_ID
      current_user
      require_sign_in!(parti_post_path(params_id))
    end
    if @posts.category_id === Category_id::PianiNotice_ID
      @link =  belong_notice_piani_index_path
    elsif  @posts.category_id === Category_id::PianiLetter_ID
      @link =  belong_letter_piani_index_path
    elsif  @posts.category_id === Category_id::PianiMovie_ID
      @link =  belong_movie_piani_index_path
    elsif  @posts.category_id === Category_id::PianiFormat_ID
      @link =  belong_format_piani_index_path
    end
  end
  def name
    @name = NAME::PIANI
  end
  def common
    @header = COMMON::HEADER_PIANI
    @footer = COMMON::FOOTER_PIANI
  end
  private
  def params_id
    params.require(:id)
  end
end
