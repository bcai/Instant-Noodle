json.extract! post, :id, :image_url, :description
json.author post.author, :id, :username
json.age time_ago_in_words(post.created_at)

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