Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get "recipes/random/:num", to: "recipes#random"
    get "users/browse", to: "static_pages#presearch_users"
    get "users/browse/:query", to: "static_pages#search_users"
    get "recipes/browse", to: "static_pages#presearch_recipes"
    get "recipes/:search_type/:query/:page", to: "static_pages#search_recipes"
    get "multisearch/:query/:page", to: "static_pages#multisearch"
    resources :users
    resources :recipes
    resources :ingredients
    resources :recipe_ingredients
    resources :recipe_adds
    resource :session, only: [:show, :create, :destroy]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
