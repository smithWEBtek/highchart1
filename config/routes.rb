Rails.application.routes.draw do
  resources :user_sources
  resources :users
  resources :sources
  root 'static#charts'
  get 'charts', to: 'static#charts'
end
