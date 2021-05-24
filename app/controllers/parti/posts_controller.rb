class Parti::PostsController < PostsController
  before_action :common
  before_action :name
  def show
    @posts = Post.find(params_id)
    if @posts.category_id === Category_id::PartiLetter_ID ||
        @posts.category_id === Category_id::PartiMovie_ID
      current_user
      require_sign_in!(parti_post_path(params_id))
    end
    if @posts.category_id === Category_id::PartiNotice_ID
      @link =  belong_notice_parti_index_path
    elsif  @posts.category_id === Category_id::PartiLetter_ID
      @link =  belong_letter_parti_index_path
    elsif  @posts.category_id === Category_id::PartiMovie_ID
      @link =  belong_movie_parti_index_path
    elsif  @posts.category_id === Category_id::PartiFormat_ID
      @link =  belong_format_parti_index_path
    end
  end
  def name
    @name = NAME::PARTI
  end
  def common
    @header = COMMON::HEADER_PARTI
    @footer = COMMON::FOOTER_PARTI
  end
  private
  def params_id
    params.require(:id)
  end
end
