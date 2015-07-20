Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :recipes
    resources :ingredients
    resources :recipe_ingredients
    resource :session, only: [:show, :create, :destroy]
  end
end
