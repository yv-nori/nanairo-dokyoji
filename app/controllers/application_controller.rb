class ApplicationController < ActionController::Base
  def sign_in(user)
    remember_token = User.new_remember_token
    cookies.permanent[:user_remember_token] = remember_token
    user.update!(remember_token: User.encrypt(remember_token))
    @current_user = user
  end
    def sign_out
      @current_user = nil
      cookies.delete(:user_remember_token)
    end
end
