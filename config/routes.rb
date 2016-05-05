Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:index, :new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :show, :create, :update]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
  end
end
