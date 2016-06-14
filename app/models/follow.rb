class Follow < ActiveRecord::Base
  validates :user_id, :follower_id, presence: true
  validates :follower_id, uniqueness: {scope: :user_id}

  belongs_to :user

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User
end
