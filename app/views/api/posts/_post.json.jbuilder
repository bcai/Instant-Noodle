json.extract! post, :id, :image_url, :description
json.author post.author, :id, :username
json.age time_ago_in_words(post.created_at)
json.comments post.comments, :body, :user_id