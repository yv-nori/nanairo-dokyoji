class ApplicationMailer < ActionMailer::Base
  default from: 'nori.gram.test@gmail.com'
  layout 'mailer'
  ActionMailer::Base.register_observer(EmailLogObserver.new)
end
