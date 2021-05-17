Rails.application.routes.draw do
  namespace :admin do
    resources :contacts
    resources :contact_recruits
    root to: "contacts#index"
  end
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout_self', to: 'sessions#logout_self'
  delete 'logout', to: 'sessions#destroy'
  root to: "nanairo#index"
  
  resources :nanairo do
    collection do
      get 'about'
      get 'admission'
      get 'contact'
      post 'contact_create'
      get 'policy'
      get 'privacy'
      get 'recipe'
      get 'recruit'
      post 'recruit_create'
      get 'support'
      get 'vision'
      post 'create'
    end
  end
  resources :piani do
    collection do
      get 'about'
      get 'admission'
      get 'belong'
      get 'contact'
      post 'contact_create'
      get 'eat-education'
      get 'event'
      get 'features'
      get 'for-admission'
      get 'index'
      get 'one-day'
      get 'photo-gallery'
      get 'policy'
      get 'privacy'
      get 'recipe'
      get 'recruit'
      post 'recruit_create'
      get 'support'
      get 'vision'
    end
  end
  resources :parti do
    collection do
      get 'about'
      get 'admission'
      get 'belong'
      get 'contact'
      post 'contact_create'
      get 'eat-education'
      get 'event'
      get 'features'
      get 'for-admission'
      get 'index'
      get 'one-day'
      get 'photo-gallery'
      get 'policy'
      get 'privacy'
      get 'recipe'
      get 'recruit'
      post 'recruit_create'
      get 'support'
      get 'vision'
    end
  end
end
