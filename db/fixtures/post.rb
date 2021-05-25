Post.seed do |s|
  s.id = 1
  s.category_id = Category_id::PartiNotice_ID
  s.title = 'ホームページ更新のおしらせ'
  s.text = 'ホームページを更新いたしました。'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 2
  s.category_id = Category_id::PianiNotice_ID,
  s.title = 'ホームページ更新のおしらせ'
  s.text = 'ホームページを更新いたしました。'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 3
  s.category_id = Category_id::PartiFormat_ID
  s.title = '与薬連絡票'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 4
  s.category_id = Category_id::PianiFormat_ID
  s.title = '与薬連絡票'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 5
  s.category_id = Category_id::PartiFormat_ID
  s.title = '登園許可意見書'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 6
  s.category_id = Category_id::PianiFormat_ID
  s.title = '登園許可意見書'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 7
  s.category_id = Category_id::JobPosting_ID
  s.title = '令和3年 求人票'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 8
  s.category_id = Category_id::CompanyStatute_ID
  s.title = '定款'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 9
  s.category_id = Category_id::OfficerList_ID
  s.title = '役員名簿'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 10
  s.category_id = Category_id::PaymentRule_ID
  s.title = '役員報酬基準'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 11
  s.category_id = Category_id::PartiSelfAssessment_ID
  s.title = 'パルティ自己評価表'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 12
  s.category_id = Category_id::PianiSelfAssessment_ID
  s.title = 'ピアニィ自己評価表'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 13
  s.category_id = Category_id::PartiAdmission_ID
  s.title = '令和3年度 パルティ募集要項'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
Post.seed do |s|
  s.id = 14
  s.category_id = Category_id::PianiAdmission_ID
  s.title = '令和3年度 ピアニィ募集要項'
  s.created_at = Date.new(2021, 6, 1)
  s.updated_at = Date.new(2021, 6, 1)
end
