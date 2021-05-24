module Category_id
  @var = Category.find_by(name: 'パルティお知らせ(全体)')
  if @var ==! nil
    PartiNotice_ID = @var.id
  else
    PartiNotice_ID = 1
  end
  @var = Category.find_by(name: 'ピアニィお知らせ(全体)')
  if @var ==! nil
    PianiNotice_ID = @var.id
  else
    PianiNotice_ID = 2
  end
  @var = Category.find_by(name: 'パルティおたより(パスワード)')
  if @var ==! nil
    PartiLetter_ID = @var.id
  else
    PartiLetter_ID = 3
  end
  @var = Category.find_by(name: 'ピアニィおたより(パスワード)')
  if @var ==! nil
    PianiLetter_ID = @var.id
  else
    PianiLetter_ID = 4
  end
  @var = Category.find_by(name: 'パルティムービー(パスワード)')
  if @var ==! nil
    PartiMovie_ID = @var.id
  else
    PartiMovie_ID = 5
  end
  @var = Category.find_by(name: 'ピアニィムービー(パスワード)')
  if @var ==! nil
    PianiMovie_ID = @var.id
  else
    PianiMovie_ID = 6
  end
  @var = Category.find_by(name: 'パルティ書式')
  if @var ==! nil
    PartiFormat_ID = @var.id
  else
    PartiFormat_ID = 7
  end
  @var = Category.find_by(name: 'ピアニィ書式')
  if @var ==! nil
    PianiFormat_ID = @var.id
  else
    PianiFormat_ID = 8
  end
  @var = Category.find_by(name: '求人票')
  if @var ==! nil
    JobPosting_ID = @var.id
  else
    JobPosting_ID = 9
  end
  @var = Category.find_by(name: '定款')
  if @var ==! nil
    CompanyStatute_ID = @var.id
  else
    CompanyStatute_ID = 10
  end
  @var = Category.find_by(name: '役員名簿')
  if @var ==! nil
    OfficerList_ID = @var.id
  else
    OfficerList_ID = 11
  end
  @var = Category.find_by(name: '役員報酬基準')
  if @var ==! nil
    PaymentRule_ID = @var.id
  else
    PaymentRule_ID = 12
  end
  @var = Category.find_by(name: 'パルティ自己評価表')
  if @var ==! nil
    PartiSelfAssessment_ID = @var.id
  else
    PartiSelfAssessment_ID = 13
  end
  @var = Category.find_by(name: 'ピアニィ自己評価表')
  if @var ==! nil
    PianiSelfAssessment_ID = @var.id
  else
    PianiSelfAssessment_ID = 14
  end
  @var = Category.find_by(name: 'パルティ募集要項')
  if @var ==! nil
    PartiAdmission_ID = @var.id
  else
    PartiAdmission_ID = 15
  end
  @var = Category.find_by(name: 'ピアニィ募集要項')
  if @var ==! nil
    PianiAdmission_ID = @var.id
  else
    PianiAdmission_ID = 16
  end
end
