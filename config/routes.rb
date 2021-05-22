Rails.application.routes.draw do
  namespace :admin do
    resources :contacts
    resources :contact_recruits
    resources :posts
    resources :users
    resources :accepts
    resources :categories
    root to: "contacts#index"
  end
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout_self', to: 'sessions#logout_self'
  delete 'logout', to: 'sessions#destroy'
  root to: "nanairo#index"  
    resources :posts, only: [:index, :show]
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
  namespace :piani do
    resources :posts, only: [:show]
  end
  resources :piani do
    collection do
      get 'about'
      get 'admission'
      get 'belong'
      get 'belong_notice'
      get 'belong_letter'
      get 'belong_movie'
      get 'belong_format'
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
  namespace :parti do
    resources :posts, only: [:show]
  end
  resources :parti do
    collection do
      get 'about'
      get 'admission'
      get 'belong'
      get 'belong_notice'
      get 'belong_letter'
      get 'belong_movie'
      get 'belong_format'
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
