Rails.application.routes.draw do

  get 'comments/create'

  get 'comments/destroy'

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :show, :create, :update]
    resources :comments, only: [:index, :create, :destroy]
  end
end
