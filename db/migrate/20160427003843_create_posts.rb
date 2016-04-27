class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :description
      t.integer :author_id, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end
    add_index :posts, :author_id
  end
end
