namespace :heroku do
  desc 'restarts all the heroku dynos so we can control when they restart'
  task :restart do
    reload!
  end
end
