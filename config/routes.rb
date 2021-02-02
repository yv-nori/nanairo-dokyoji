Rails.application.routes.draw do
  root to: "home#index"
  resources :recruit, only: [:index]
end
