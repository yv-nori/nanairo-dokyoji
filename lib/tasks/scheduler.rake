desc "This task is called by the Heroku scheduler add-on"
task :daily_notification => :environment do
  today = Date.today
  if today.month < 4
    check_day = Date.new(today.year + 1, 2, 1)
  else
    check_day = Date.new(today.year, 2 , 1)
  end
  check_lists = [
    {date: CostUniform::CostUniform_Update, message: '制服価格'},
    {date: CostAge::CostAge_Update, message: '年齢別価格'},
    {date: Post::JobPosting_Update, message: '求人票'},
    {date: Post::CompanyStatute_Update, message: '定款'},
    {date: Post::OfficerList_Update, message: '役員名簿'},
    {date: Post::PaymentRule_Update, message: '役員報酬'},
    {date: Post::PartiSelfAssessment_Update, message: 'パルティ自己評価'},
    {date: Post::PianiSelfAssessment_Update, message: 'ピアニィ自己評価'}
  ]
  alerts = {items:[], date: check_day}
  check_lists.each do |list|
    if list[:date] <= check_day
      alerts[:items].push(name: list[:message], date: list[:date])
    end
  end
  if alerts[:items].present?
    DailyMailer.daily_notification(alerts).deliver_now
  end
end
