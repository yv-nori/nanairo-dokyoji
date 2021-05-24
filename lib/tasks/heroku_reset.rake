namespace :heroku do
  desc 'restarts all the heroku dynos so we can control when they restart'
  task :restart do
    thread = Thread.new do
      begin
        while true
          sleep 1
        end
      ensure
        puts "ensure called"
      end
    end

    current_pid = Process.pid
    signal      = "SIGKILL"
    Process.kill(signal, current_pid)
  end
end
