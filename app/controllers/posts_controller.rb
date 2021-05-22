class PostsController < FormController
  def post_public(category_id, title_en, title_ja)
    getPost(category_id, title_en, title_ja)
  end
  def post_private(category_id, path, title_en, title_ja)
    current_user
    expiration_date
    require_sign_in!(path)
    getPost(category_id, title_en, title_ja)
  end
  
  def getPost(category_id, title_en, title_ja)
    @items = {
      title: title_ja,
      title_en: title_en
    }
    @posts = Post.order(release_date: 'DESC').where(category_id: category_id).page(params[:page]).per(10)
    respond_to do |format|
      format.html
      format.js
    end
  end
  def show
  end
  private
  def id_params
    params.require(:id)
  end
end
