Rails.application.routes.draw do
  resources :comments
  resources :outfits
  resources :shoes
  resources :bottoms
  resources :tops
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
