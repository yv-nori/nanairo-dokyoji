class SessionsController < ApplicationController
  before_action :set_user, only: [:create]

  def new
    @user = User.new()
  end

  def create
    if @user.authenticate(session_params[:password])
      if session[:path].include?('parti') && @user.id === USER::PartiUser_ID ||
        session[:path].include?('piani') && @user.id === USER::PianiUser_ID ||
        session[:path].include?('parti') && @user.id === USER::NanairoRoot_ID ||
        session[:path].include?('piani') && @user.id === USER::NanairoRoot_ID ||
        session[:path].include?('admin') && @user.id === USER::NanairoRoot_ID
        sign_in_success
      else
        sign_in_false('NoMatchUser')
      end
    else
      sign_in_false(t('.flash.invalid_password'))
    end
  end
  def sign_in_success
    sign_in(@user)
    redirect_to session[:path]
  end
  def sign_in_false(message)
    flash.now[:danger] = message
    @user = User.new()
    render 'new'
  end
  def logout_self
    destroy
  end

  def destroy
    sign_out
    redirect_to login_path
  end

  private

    def set_user
      @user = User.find_by!(name: session_params[:name])
    rescue
      @user = User.new(session_params)
      render action: 'new'
    end

    # 許可するパラメータ
    def session_params
      params.require(:user).permit(:name, :password)
    end
end
