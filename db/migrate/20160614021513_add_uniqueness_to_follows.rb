class AddUniquenessToFollows < ActiveRecord::Migration
  def change
    add_index :follows, [:user_id, :follower_id], unique: true
  end
end
