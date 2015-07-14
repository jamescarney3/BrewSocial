Rails.application.routes.draw do

  root to: "sessions#new"

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :recipes, only: [:new, :edit, :create, :update, :destroy, :show, :index]

end
