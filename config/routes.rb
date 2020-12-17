Rails.application.routes.draw do
  resources :user_sources
  resources :users
  resources :sources
  root 'static#charts'
  get 'charts', to: 'static#charts'

  # api services
  get '/nyt_api', to: 'app_services#nyt_api'
end
