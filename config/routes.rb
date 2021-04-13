Rails.application.routes.draw do
  root to: "home#index"
  resources :contact_recruits, only: [:index, :create, :new]
  resources :home do
    collection do
      get 'about'
      get 'admission'
      get 'contact'
      post 'contact_create'
      get 'vision'
      get 'policy'
      get 'privacy'
      post 'create'
      get 'recruit'
      post 'recruit_create'
    end
  end
  resources :piani do
    collection do
      get 'index'
      get 'vision'
      get 'event'
      get 'photo_gallery'
      get 'belong'
      get 'eat_education'
      get 'admission'
      get 'one_day'
      get 'for_admission'
      get 'support'
      get 'about'
      get 'features'
      get 'recruit'
      post 'recruit_create'
    end
  end
  resources :parti do
    collection do
      get 'index'
      get 'vision'
      get 'event'
      get 'photo_gallery'
      get 'belong'
      get 'eat_education'
      get 'admission'
      get 'one_day'
      get 'for_admission'
      get 'support'
      get 'about'
      get 'features'
      get 'recruit'
      post 'recruit_create'
    end
  end
end
