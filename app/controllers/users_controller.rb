class UsersController < ApplicationController
  def index
    @users = User.all
    render "index.json.jbuilder"
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    @posts = @user.posts
    render "show.json.jbuilder"
  end

  private
  def user_params
    params.require(:user).permit(:password, :full_name, :username)
  end
end
