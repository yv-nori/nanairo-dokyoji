class PartiController < ApplicationController
  def recruit
    @contact_recruit = Contact.new()
  end
  def recruit_create
    @contact_recruit = ContactRecruit.new(contact_recruit_params)
    if @contact_recruit.save
      redirect_to recruit_parti_index_path, notice: "送信が完了しました。"
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
end
