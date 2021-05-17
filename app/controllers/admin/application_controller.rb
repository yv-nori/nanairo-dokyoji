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
    before_action :authenticate_admin

    protect_from_forgery with: :exception

    def authenticate_admin
    end

    def current_user
      remember_token = User.encrypt(cookies[:user_remember_token])
      @current_user ||= User.find_by(remember_token: remember_token)
    end

    def sign_in(user)
      remember_token = User.new_remember_token
      cookies.permanent[:user_remember_token] = remember_token
      user.update!(remember_token: User.encrypt(remember_token))
      @current_user = user
    end
    
    def signed_in?
      @current_user.present?
    end

    private
  
      def require_sign_in!
        redirect_to login_path unless signed_in?
      end
    # Override this value to specify the number of elements to display at a time
    # on index pages. Defaults to 20.
    # def records_per_page
    #   params[:per_page] || 20
    # end
  end
end
