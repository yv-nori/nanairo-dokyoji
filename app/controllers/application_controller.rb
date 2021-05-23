class ApplicationController < ActionController::Base
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
  def require_sign_in!(path)
    session[:path] = path
    redirect_to login_path unless signed_in?
  end
end
