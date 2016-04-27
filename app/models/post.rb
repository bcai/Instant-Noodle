class Post < ActiveRecord::Base
  validates :author_id, :image_url, presence: true

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
end
