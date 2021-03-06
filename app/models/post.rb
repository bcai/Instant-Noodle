class Post < ActiveRecord::Base
  validates :author_id, :image_url, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User


  has_many :comments
  has_many :likes

  has_many :follows,
    primary_key: :author_id,
    foreign_key: :user_id,
    class_name: :Follow

  def ordered_comments
    Comment.where(post_id: self.id).order(:created_at)
  end
end
