Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :recipes

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :recipes
  end
end
