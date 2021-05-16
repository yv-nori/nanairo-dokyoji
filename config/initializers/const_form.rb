module FORM
  Name = {
    title: 'お名前',
    mandatory: true,
    key: :name,
    id: 'name',
    maxlength: '30',
    placeholder: '例) 七彩　花子',
    error_message: ''
  }
  Name_kana = {
    title: 'ふりがな',
    mandatory: true,
    key: :name_kana,
    id: 'name_kana',
    maxlength: '30',
    placeholder: '例) なないろ　はなこ',
    error_message: ''
  }
  Tel = {
    title: '電話番号',
    mandatory: true,
    key: :tel,
    id: 'tel',
    maxlength: '12',
    placeholder: '例) 000-0000-000',
    error_message: ''
  }
  Email = {
    title: 'メールアドレス',
    mandatory: true,
    key: :email,
    id: 'email',
    email_field: true,
    placeholder: '例) example@dokyoji.or.jp',
    error_message: ''
  }
  Email_confirmation = {
    title: 'メールアドレス確認',
    mandatory: true,
    key: :email_confirmation,
    id: 'email_cofirmation',
    email_field: true,
    placeholder: '例) example@dokyoji.or.jp',
    error_message: ''
  }
  Postal_code = {
    title: '郵便番号',
    key: :postal_code,
    id: 'postal_code',
    maxlength: '8',
    placeholder: '例) 〒597-0033',
    error_message: ''
  }
  Address = {
    title: 'ご住所',
    key: :address,
    id: 'address',
    placeholder: '例) 大阪府　貝塚市　半田1-3-6',
    error_message: ''
  }
  Question = {
  title: 'その他質問事項',
  key: :question,
  id: 'question',
  text_area: true,
  maxlength: '1000',
  rows: '4',
  error_message: ''
  }
end
