class HomeController < ApplicationController
  def index
  end

  def about
  end
  
  def admission
  end

  def contact
    @contact = Contact.new()
  end
  
  def vision
  end

  def policy
  end

  def privacy
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to contact_home_index_path, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact).deliver_now
    else
      flash.now[:alert] = '送信に失敗しました。'
      render :index
    end
  end

  private
  
  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
