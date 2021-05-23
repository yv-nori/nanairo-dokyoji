class DailyMailer < ApplicationMailer
  def daily_notification(alerts)
    @alerts = alerts
    mail to: 'nori@dokyoji.or.jp',
    subject: 'ホームページ未更新のお知らせ'
  end
end
