json.extract! @user, :id, :username, :full_name 
json.posts @posts do |post|
  json.id post.id
  json.author post.author, :id, :username
  json.image_url post.image_url
  json.description post.description

  json.likes post.likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.post_id like.post_id
  end

  json.comments post.ordered_comments do |comment|
    json.id comment.id
    json.body comment.body
    json.user do
      json.id comment.user.id
      json.username comment.user.username
    end
    json.post_id comment.post_id
  end 
end