class ContactMailer < ApplicationMailer
  def contact_mail_recruit(contact, form_name)
    @contact = contact
    @form_name = form_name
    mail to: 'parti@dokyoji.or.jp',
        subject: 'お問い合わせ内容'
  end
  def contact_mail_recruit_auto_reserve(contact)
    @contact = contact
    mail to: @contact.email,
        subject: '(自動返信)お問い合わせ内容のご確認'
  end
  def contact_mail(contact, form_name)
    @contact = contact
    @form_name = form_name
    mail to: 'parti@dokyoji.or.jp',
        subject: 'お問い合わせ内容'
  end
  def contact_mail_auto_reserve(contact)
    @contact = contact
    mail to: @contact.email,
        subject: '(自動返信)お問い合わせ内容のご確認'
  end
end
