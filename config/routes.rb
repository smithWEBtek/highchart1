Rails.application.routes.draw do
  get 'static/bar_example'
  resources :user_sources
  resources :users
  resources :sources
  root 'sources#index'
  get 'bar_example', to: "static#bar_example"
  get 'fruits', to: "static#fruits"
end
