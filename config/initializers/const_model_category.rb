module CATEGORY
  @var = Category.where(name: 'パルティお知らせ(全体)').first.id
  if @var ==! nil
    PartiNotice_ID = @var
  else
    PartiNotice_ID = 1
  end
  @var = Category.where(name: 'ピアニィお知らせ(全体)').first.id
  if @var ==! nil
    PianiNotice_ID = @var
  else
    PianiNotice_ID = 2
  end
  @var = Category.where(name: 'パルティおたより(パスワード)').first.id
  if @var ==! nil
    PartiLetter_ID = @var
  else
    PartiLetter_ID = 3
  end
  @var = Category.where(name: 'ピアニィおたより(パスワード)').first.id
  if @var ==! nil
    PianiLetter_ID = @var
  else
    PianiLetter_ID = 4
  end
  @var = Category.where(name: 'パルティムービー(パスワード)').first.id
  if @var ==! nil
    PartiMovie_ID = @var
  else
    PartiMovie_ID = 5
  end
  @var = Category.where(name: 'ピアニィムービー(パスワード)').first.id
  if @var ==! nil
    PianiMovie_ID = @var
  else
    PianiMovie_ID = 6
  end
  @var = Category.where(name: 'パルティ書式').first.id
  if @var ==! nil
    PartiFormat_ID = @var
  else
    PartiFormat_ID = 7
  end
  @var = Category.where(name: 'ピアニィ書式').first.id
  if @var ==! nil
    PianiFormat_ID = @var
  else
    PianiFormat_ID = 8
  end
  @var = Category.where(name: '求人票').first.id
  if @var ==! nil
    JobPosting_ID = @var
  else
    JobPosting_ID = 9
  end
  @var = Category.where(name: '定款').first.id
  if @var ==! nil
    CompanyStatute_ID = @var
  else
    CompanyStatute_ID = 10
  end
  @var = Category.where(name: '役員名簿').first.id
  if @var ==! nil
    OfficerList_ID = @var
  else
    OfficerList_ID = 11
  end
  @var = Category.where(name: '役員報酬基準').first.id
  if @var ==! nil
    PaymentRule_ID = @var
  else
    PaymentRule_ID = 12
  end
  @var = Category.where(name: 'パルティ自己評価表').first.id
  if @var ==! nil
    PartiSelfAssessment_ID = @var
  else
    PartiSelfAssessment_ID = 13
  end
  @var = Category.where(name: 'ピアニィ自己評価表').first.id
  if @var ==! nil
    PianiSelfAssessment_ID = @var
  else
    PianiSelfAssessment_ID = 14
  end
  @var = Category.where(name: 'パルティ募集要項').first.id
  if @var ==! nil
    PartiAdmission_ID = @var
  else
    PartiAdmission_ID = 15
  end
  @var = Category.where(name: 'ピアニィ募集要項').first.id
  if @var ==! nil
    PianiAdmission_ID = @var
  else
    PianiAdmission_ID = 16
  end
end
