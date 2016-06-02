class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: @follow, status: 200
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :follower_id)
  end
end
