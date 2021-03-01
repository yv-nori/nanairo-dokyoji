class ContactRecruitsController < ApplicationController
  def index
    @contact_recruit = ContactRecruit.new()
  end

  def create
    @contact_recruit = ContactRecruit.new(contact_recruit_params)
    if @contact_recruit.save
      redirect_to contact_recruits_path, notice: "送信が完了しました。"
      ContactRecruitMailer.contact_recruit_mail(@contact_recruit).deliver_now
    else
      flash.now[:alert] = '送信に失敗しました。'
      render :index
    end
  end

  private

  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
end
