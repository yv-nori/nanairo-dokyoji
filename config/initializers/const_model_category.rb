module Category_id
  @var = Category.find_by(name: 'パルティお知らせ(全体)').id
  if @var ==! nil
    PartiNotice_ID = @var
  else
    PartiNotice_ID = 1
  end
  @var = Category.find_by(name: 'ピアニィお知らせ(全体)').id
  if @var ==! nil
    PianiNotice_ID = @var
  else
    PianiNotice_ID = 2
  end
  @var = Category.find_by(name: 'パルティおたより(パスワード)').id
  if @var ==! nil
    PartiLetter_ID = @var
  else
    PartiLetter_ID = 3
  end
  @var = Category.find_by(name: 'ピアニィおたより(パスワード)').id
  if @var ==! nil
    PianiLetter_ID = @var
  else
    PianiLetter_ID = 4
  end
  @var = Category.find_by(name: 'パルティムービー(パスワード)').id
  if @var ==! nil
    PartiMovie_ID = @var
  else
    PartiMovie_ID = 5
  end
  @var = Category.find_by(name: 'ピアニィムービー(パスワード)').id
  if @var ==! nil
    PianiMovie_ID = @var
  else
    PianiMovie_ID = 6
  end
  @var = Category.find_by(name: 'パルティ書式').id
  if @var ==! nil
    PartiFormat_ID = @var
  else
    PartiFormat_ID = 7
  end
  @var = Category.find_by(name: 'ピアニィ書式').id
  if @var ==! nil
    PianiFormat_ID = @var
  else
    PianiFormat_ID = 8
  end
  @var = Category.find_by(name: '求人票').id
  if @var ==! nil
    JobPosting_ID = @var
  else
    JobPosting_ID = 9
  end
  @var = Category.find_by(name: '定款').id
  if @var ==! nil
    CompanyStatute_ID = @var
  else
    CompanyStatute_ID = 10
  end
  @var = Category.find_by(name: '役員名簿').id
  if @var ==! nil
    OfficerList_ID = @var
  else
    OfficerList_ID = 11
  end
  @var = Category.find_by(name: '役員報酬基準').id
  if @var ==! nil
    PaymentRule_ID = @var
  else
    PaymentRule_ID = 12
  end
  @var = Category.find_by(name: 'パルティ自己評価表').id
  if @var ==! nil
    PartiSelfAssessment_ID = @var
  else
    PartiSelfAssessment_ID = 13
  end
  @var = Category.find_by(name: 'ピアニィ自己評価表').id
  if @var ==! nil
    PianiSelfAssessment_ID = @var
  else
    PianiSelfAssessment_ID = 14
  end
  @var = Category.find_by(name: 'パルティ募集要項').id
  if @var ==! nil
    PartiAdmission_ID = @var
  else
    PartiAdmission_ID = 15
  end
  @var = Category.find_by(name: 'ピアニィ募集要項').id
  if @var ==! nil
    PianiAdmission_ID = @var
  else
    PianiAdmission_ID = 16
  end
end
