class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like, status: 200
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
