# All Administrate controllers inherit from this
# `Administrate::ApplicationController`, making it the ideal place to put
# authentication logic or other before_actions.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :current_user
    before_action :require_sign_in!
    helper_method :signed_in?
    before_action :expiration_date
    before_action :authenticate_admin
    protect_from_forgery with: :exception

    def authenticate_admin
    end
    
    def sign_in(user)
      remember_token = User.new_remember_token
      cookies[:user_remember_token] = remember_token
      user.update!(remember_token: User.encrypt(remember_token))
      @current_user = user
    end
    def sign_out
      @current_user = nil
      cookies.delete(:user_remember_token)
    end
    def current_user
      remember_token = User.encrypt(cookies[:user_remember_token])
      @current_user ||= User.find_by(remember_token: remember_token)
    end
    def signed_in?
      @current_user.present?
    end
    def expiration_date
      if @current_user.present? && @current_user.updated_at < Time.now - 7.days
        sign_out
      end
    end
    private
      def require_sign_in!
        session[:path] = '/admin'
        redirect_to login_path unless signed_in?
      end
    # Override this value to specify the number of elements to display at a time
    # on index pages. Defaults to 20.
    # def records_per_page
    #   params[:per_page] || 20
    # end
  end
end
