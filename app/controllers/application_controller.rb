class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
<<<<<<< HEAD
=======

  helper_method :current_user, :signed_in?

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in!(user)
    session[:session_token] = user.reset_token!
  end

  def sign_out!
    current_user.reset_token!
    session[:session_token] = nil
  end
>>>>>>> eb35ff629f43c1fc7226650914a9567f288f3440
end
