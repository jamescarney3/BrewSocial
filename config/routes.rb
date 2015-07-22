Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users do
      get 'ex', :example
    end
    # ^^ this is just an example that goes to a useless example route
    resources :recipes
    resources :ingredients
    resources :recipe_ingredients
    resources :recipe_adds
    resource :session, only: [:show, :create, :destroy]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
