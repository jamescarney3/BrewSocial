Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users do
      get 'ex', :example
    end
    # ^^ this is just an example that goes to a useless example route
    get "/search", to: "static_pages#search"
    get "recipes/random/:num", to: "recipes#random"
    get "recipes/:search_type/:query", to: "static_pages#search_recipes"
    resources :recipes
    resources :ingredients
    resources :recipe_ingredients
    resources :recipe_adds
    resource :session, only: [:show, :create, :destroy]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
