Rails.application.routes.draw do
  root to: "home#index"
  resources :contact_recruits, only: [:index, :create, :new]
  resources :home do
    collection do
      get 'about'
      get 'admission'
      get 'contact'
      get 'vision'
      get 'policy'
      get 'privacy'
      post 'create'
    end
  end
  resources :piani do
    collection do
      get 'index'
    end
  end
end
