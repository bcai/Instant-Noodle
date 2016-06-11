class Api::PostsController < ApplicationController
  before_action :require_user_signed_in!

  def index
    if current_user
      current_id = current_user.id

      @posts = Post.find_by_sql(
       "SELECT
          p.*
       FROM
          posts p 
       JOIN
          follows f
       ON 
          p.author_id = f.user_id
       WHERE
          f.follower_id = #{current_id}")

      @posts += Post.where(author_id: current_id)
    else
      @posts = Post.includes(:author, comments: :user, likes: :user)
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:description, :author_id, :image_url)
  end
end
