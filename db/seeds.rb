# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!([
  {username: 'guest', full_name: "Guest", password: "password"},
  {username: 'bcai', full_name: "Brando Cai", password: "password"},
  {username: 'dtru', full_name: "Devina Tru", password: "password"},
  {username: 'dtruong', full_name: "Dev Tru", password: "password"},
  {username: 'branderf', full_name: "Brandino Acai", password: "password"},
  {username: 'bderf', full_name: "Bran Don", password: "password"},
  {username: 'bDiddy', full_name: "DonBranCai", password: "password"}
])

Post.create!([
  {description: 'Best burger in town. #bacon #datcheesedoe', author_id: 1, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--DgWsq3AF--/q_50/v1462156042/photo-1460306855393-0410f61241c7_rj67s8.webp'},
  {description: '#spicy', author_id: 4, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--bizMKI0P--/q_50/v1462156091/photo-1455619452474-d2be8b1e70cd_svy3ux.webp'},
  {description: 'My favorite pie. #cranberry', author_id: 1, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--ONJlQtpw--/q_50/v1462156107/photo-1460380410874-537ecece3984_ay4cki.webp'},
  {description: 'Spaghetti #simple #delicious', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--HcIipXJe--/q_50/v1462156331/photo-1458644267420-66bc8a5f21e4_wavmps.webp'},
  {description: 'Soup of the day', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--gwl6gtra--/q_50/v1462156129/photo-1449793079811-bc4bcd990abf_hiwd1y.webp'}
])

Comment.create!([
  {body: "Where is this at?", post_id: 5, user_id: 4},
  {body: "Souplantation dude!", post_id: 5, user_id: 2},
  {body: "I like boysenberry more :P", post_id: 3, user_id: 2}
])

Like.create!([
  {post_id: 5, user_id: 1},
  {post_id: 5, user_id: 2},
  {post_id: 4, user_id: 2},
  {post_id: 4, user_id: 3},
])