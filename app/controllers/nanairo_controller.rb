class NanairoController < ApplicationController
  before_action :items
  def contact
    @contact = Contact.new()
  end
  def recruit
    @contact_recruit = ContactRecruit.new()
    @staff_0 = [
      name:'上村　和美',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'right',
      js_id:'0'
    ]
    @staff_img_0 = ['parti','0']
    @staff_catch_0 ='仕事も家族も'
    @staff_1 = [
      name:'篠原　明美',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'right',
      js_id:'1'
    ]
    # parti0,1,piani2,3
    @staff_img_1 = ['piani','1']
    @staff_catch_1 ='ひとりひとりの<br>子どもを大切に'
    @staff_2 = [
      name:'名前　名前',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'left',
      js_id:'2'
    ]
    @staff_img_2 = ['piani','3']
    @staff_catch_2 ='言葉を手渡す'
    @staff_3 = [
      name:'北野　沙織',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'left',
      js_id:'3'
    ]
    @staff_img_3 = ['parti','0']
    @staff_catch_3 ='優しさをもって'
  end

  def contact_create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to contact_nanairo_index_path, notice: "送信が完了しました。"
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

  def items
    @header_items = {
      logo: 'logo-image',
      logo_path: root_path
    }
    @header_lists = [
      {title: '七彩学舎について',link: about_nanairo_index_path},
      {title: '入園をお考えの方へ',link: admission_nanairo_index_path},
      {title: '就職をお考えの方へ',link: recruit_nanairo_index_path},
      {title: 'パルティ道教寺',link: parti_index_path},
      {title: 'ピアニィ道教寺',link: piani_index_path},
      {title: 'お問い合わせ',link: contact_nanairo_index_path}
    ]
    @footer_item = {logo: 'logo'}
    @footer_lists = [
      {title: '七彩学舎',link: root_path},
      {title: '法人概要',link: about_nanairo_index_path},
      {title: 'お問い合わせ',link: contact_nanairo_index_path},
      {title: '個人情報保護',link: privacy_nanairo_index_path},
      {title: 'サイトポリシー',link: policy_nanairo_index_path}
    ]
    @footer_texts = {
      address: '〒597-0033　大阪府貝塚市半田1-3-6',
      tel: 'TEL 072-493-1330 FAX 072-493-1331',
    }
  end

  private

  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end

  def contact_params
    params.require(:contact).permit(:name, :email, :email_confirmation, :question)
  end
end
