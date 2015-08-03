Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get "/users/browse/:query", to: "static_pages#search_users"
    get "recipes/random/:num", to: "recipes#random"
    get "recipes/:search_type/:query", to: "static_pages#search_recipes"
    resources :users
    resources :recipes
    resources :ingredients
    resources :recipe_ingredients
    resources :recipe_adds
    resource :session, only: [:show, :create, :destroy]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
