Rails.application.routes.draw do
  get 'static/bar_example'
  resources :user_sources
  resources :users
  resources :sources
  root 'sources#index'
  get 'fruits', to: 'static#fruits'
  get 'stocks', to: 'static#stocks'
  get 'temp', to: 'static#temp'
end
