class UrlsController < ApplicationController
  # const pool = New pool({})
  # const templateVars = {}
    # pool.query('SELECT * FROM urls').then(data => {
    # templateVars.urls = data.rows
    # return res.render('urls', templateVars)
    # })
    
  # })
  # app.get("/urls", index)

  def index
    # Templatevars
    @urls = Url.all
  end

  def new

  end
  
  def create
    puts "------------------"
    # puts params
    puts params[:url]
    # Url.create(params[:url])
    # Url.create(url_params())
    # Url.create(url_params)
    url = Url.new(url_params)
    # url.shortURL = "11111" 
    url.shortURL = SecureRandom.base64(5)
    puts SecureRandom.base64(5)
    url.save
    redirect_to '/urls'
    puts "------------------"
  end

  # This is the method we have to make to make sure no bugs or hacking happens
  private
  def url_params()
    return params.require(:url).permit(:longURL)
  end
end
