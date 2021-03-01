class ContactRecruitMailer < ApplicationMailer

  def contact_recruit_mail(contact_recruit)
    @contact_recruit = contact_recruit
    mail to: @contact_recruit.email,
         subject: 'お問い合わせ内容'
  end
end
