class SessionsController < ApplicationController
  before_action :set_user, only: [:create]

  def new
    @user = User.new()
  end

  def create
    if @user.authenticate(session_params[:password])
      sign_in(@user)
      redirect_to '/admin'
    else
      flash.now[:danger] = t('.flash.invalid_password')
    @user = User.new()
      render 'new'
    end
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
