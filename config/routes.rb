Rails.application.routes.draw do
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
