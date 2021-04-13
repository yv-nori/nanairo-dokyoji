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

  def recruit
    @contact_recruit = ContactRecruit.new()
  end

  def contact_create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to contact_home_index_path, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact).deliver_now
    else
      flash.now[:alert] = '送信に失敗しました。'
      render :contact
    end
  end

  def recruit_create
    @contact_recruit = ContactRecruit.new(contact_recruit_params)
    if @contact_recruit.save
      redirect_to contact_recruits_path, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact_recruit).deliver_now
    else
      flash.now[:alert] = '送信に失敗しました。'
      render :recruit
    end
  end

  private

  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end

  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
