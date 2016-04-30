json.extract! post, :id, :description, :image_url
json.author post.author, :id, :username
json.age time_ago_in_words(post.created_at)