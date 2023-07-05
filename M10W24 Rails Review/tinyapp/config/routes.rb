Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :urls
  resource :dashboard

  resources :something

  #   const usersRoute = require('/routes/users')
  # app.use('/users/', usersRoute)
  # router.get('/', (req, res) => {
  # const templatevars = {}
  # })

  # about 
  # tos
  # info
  get '/about', to: 'pages#about'
  get '/tos', to: 'pages#banana'
  get '/info', to: 'pages#info'
end
