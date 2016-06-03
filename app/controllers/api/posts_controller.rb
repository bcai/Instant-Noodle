class Api::PostsController < ApplicationController
  before_action :require_user_signed_in!

  def index
    if (params[:user_id])
      # @posts = Post.joins(:follows).where("author_id = post_author_id or author_id = followers.follower_id",{post_author_id: params[:user_id]}).includes(:author, comments: :user, likes: :user)
      @posts = Post.find_by_sql
      ["SELECT
          p.*
       FROM
          posts p 
       JOIN
         (SELECT
            f2.*
         FROM 
            follows f2
         WHERE
            user_id = ?)
       ON
         p.author_id = f2.user_id OR p.author_id = f2.follower_id", params[:user_id] ]

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
