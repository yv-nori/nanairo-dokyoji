FactoryBot.define do
  factory :post do
    title { "MyString" }
    text { "MyText" }
    category_id { 1 }
    release_date { "2021-05-18" }
    delete_flag { "" }
  end
end
