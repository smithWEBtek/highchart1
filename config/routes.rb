Rails.application.routes.draw do
  resources :user_sources
  resources :users
  resources :sources
  root 'sources#index'
end
