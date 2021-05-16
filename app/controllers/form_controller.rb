class FormController < ApplicationController
  def recruit(create_link)
    @form_items = [
      title: 'ENTRY',
      url: create_link,
      forms: @contact_recruit,
      items: [
        FORM::Name,
        FORM::Name_kana,
        FORM::Tel,
        FORM::Email,
        FORM::Email_confirmation,
        FORM::Postal_code,
        FORM::Address,
        FORM::Question
      ]
    ]
    error_array(@form_items, @contact_recruit)
  end
  def recruit_create(create_link, link, form_name)
    @contact_recruit = ContactRecruit.new(contact_recruit_params)
    if @contact_recruit.save
      redirect_to link, notice: "送信が完了しました。"
      ContactMailer.contact_mail_recruit(@contact_recruit, form_name).deliver_now
      ContactMailer.contact_mail_recruit_auto_reserve(@contact_recruit).deliver_now
    else
      flash.now[:alert] = '入力内容に誤りがあります。ご確認ください。'
      recruit_new
      render :recruit
    end
  end
  def contact(create_link)
    @form_items = [
      title: 'CONTACT',
      url: create_link,
      forms: @contact,
      items: [
        FORM::Name,
        FORM::Email,
        FORM::Email_confirmation,
        FORM::Question
      ]
    ]
    error_array(@form_items, @contact)
  end
  def contact_create(create_link, link, form_name)
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to link, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact, form_name).deliver_now
      ContactMailer.contact_mail_auto_reserve(@contact).deliver_now
    else
      flash.now[:alert] = '入力内容に誤りがあります。ご確認ください。'
      public_method(:contact).super_method.call(create_link)
      render :contact
    end
  end
  def error_array(array, error_params)
    array[0][:items].each do |item|
      item[:error_message] = error_params.errors.full_messages_for(item[:key])
    end
  end
end
