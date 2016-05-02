json.extract! @comment, :id, :body, :user_id, :post_id
json.user @comment.user, :id, :username