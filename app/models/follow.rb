class Follow < ActiveRecord::Base
  validates :user_id, :follower_id, presence: true

  belongs_to :user

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User
end
