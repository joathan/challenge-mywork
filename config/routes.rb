Rails.application.routes.draw do

  get 'collaborators/search', to: 'collaborators#search', as: 'collaborators_search'
  get 'timetrackings/distance', to: 'timetrackings#distance', as: 'timetrackings_distance'

  resources :timetrackings
  resources :geofences
  resources :collaborators
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
