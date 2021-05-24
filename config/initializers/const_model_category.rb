module CATEGORY
  PartiNotice_ID = Category.where(name: 'パルティお知らせ(全体)').first.id
  PianiNotice_ID = Category.where(name: 'ピアニィお知らせ(全体)').first.id
  PartiLetter_ID = Category.where(name: 'パルティおたより(パスワード)').first.id
  PianiLetter_ID = Category.where(name: 'ピアニィおたより(パスワード)').first.id
  PartiMovie_ID = Category.where(name: 'パルティムービー(パスワード)').first.id
  PianiMovie_ID = Category.where(name: 'ピアニィムービー(パスワード)').first.id
  PartiFormat_ID = Category.where(name: 'パルティ書式').first.id
  PianiFormat_ID = Category.where(name: 'ピアニィ書式').first.id
  JobPosting_ID = Category.where(name: '求人票').first.id
  CompanyStatute_ID = Category.where(name: '定款').first.id
  OfficerList_ID = Category.where(name: '役員名簿').first.id
  PaymentRule_ID = Category.where(name: '役員報酬基準').first.id
  PartiSelfAssessment_ID = Category.where(name: 'パルティ自己評価表').first.id
  PianiSelfAssessment_ID = Category.where(name: 'ピアニィ自己評価表').first.id
  PartiAdmission_ID = Category.where(name: 'パルティ募集要項').first.id
  PianiAdmission_ID = Category.where(name: 'ピアニィ募集要項').first.id
end
