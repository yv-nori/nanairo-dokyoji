Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join('tmp', 'caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :amazon

  # Don't care if the mailer can't send.

  # メール
  #deviseが認証用のURLなどを生成するのに必要になる（らしい）
  config.action_mailer.default_url_options = {  host: 'localhost', port: 3000 }
  #送信方法を指定（この他に:sendmail/:file/:testなどがあります)
  config.action_mailer.delivery_method = :smtp
  #送信方法として:smtpを指定した場合は、このconfigを使って送信詳細の設定を行います
  config.action_mailer.smtp_settings = {
    #gmail利用時はaddress,domain,portは下記で固定
    address:"smtp.gmail.com",
    domain: 'gmail.com',
    port:587,
    #gmailのユーザアカウント（xxxx@gmail.com)※念のため、credentials.yml.enc行き
    user_name: Rails.application.credentials.gmail[:user_name],
    #gmail２段階認証回避のためにアプリケーションでの利用パスワードを取得、必ずcredentials.yml.endに設定を！！
    password: Rails.application.credentials.gmail[:password],
    #パスワードをBase64でエンコード
    authentication: :login
  }
#中略#
  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.


  # ローカルホストの更新が遅いのでfalseにした
  # config.assets.js_compressor = nil
  # config.assets.css_compressor = nil
  # config.assets.compile = true
  # config.assets.digest = false
  config.assets.debug = true

  # # コンパイル済みアセットを圧縮するかどうかを指定。圧縮することで、データ容量を減らし、高速化をする
  # config.assets.compress = true
  # # JavaScriptの圧縮に使用するプログラムを定義。:uglifierが最も圧縮率が高い
  # config.assets.js_compressor = :uglifier
  # # CSSの圧縮に使用するプログラムを定義
  # config.assets.css_compressor = :scss
  # # 動的なSprocketsコンパイルをするかどうかを指定
  # config.assets.compile = true
  # # デバッグ用にアセットの連結と圧縮をやめるかどうかを指定
  # config.assets.debug = false

# JSやCSSに修正した場合に再度rake assets:precompileコマンドを実行しなくてはならない。
# config.assets.debug = falseとconfig.assets.compress = trueとしているため、エラー時のデバッグがしにくい

  config.assets.quiet = true

  # Raises error for missing translations.
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  # 更新がおそい
  # config.file_watcher = ActiveSupport::EventedFileUpdateChecker
  config.file_watcher = ActiveSupport::FileUpdateChecker
 
# # コンパイル済みアセットを圧縮するかどうかを指定。圧縮することで、データ容量を減らし、高速化をする
# config.assets.compress = true

# # JavaScriptの圧縮に使用するプログラムを定義。:uglifierが最も圧縮率が高い
# config.assets.js_compressor = :uglifier

# # CSSの圧縮に使用するプログラムを定義
# config.assets.css_compressor = :scss

# # 動的なSprocketsコンパイルをするかどうかを指定
# config.assets.compile = false

# # デバッグ用にアセットの連結と圧縮をやめるかどうかを指定
# config.assets.debug = false
end
