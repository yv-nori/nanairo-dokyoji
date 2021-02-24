Rails.application.routes.draw do
  root to: "home#index"
  resources :contact_recruits, only: [:index, :create, :new]
end
