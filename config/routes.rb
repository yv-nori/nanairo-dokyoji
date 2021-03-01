Rails.application.routes.draw do
  root to: "home#index"
  resources :contact_recruits, only: [:index, :create, :new]
  resources :home do
    collection do
      get 'about'
      get 'vision'
    end
  end
end
