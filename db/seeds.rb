# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!([
  {username: 'dtru', full_name: "Devina Tru", password: "password"},
  {username: 'dtruong', full_name: "Dev Tru", password: "password"},
  {username: 'bcai', full_name: "Brando Cai", password: "password"},
  {username: 'branderf', full_name: "Brandino Acai", password: "password"},
  {username: 'bderf', full_name: "Bran Don", password: "password"},
  {username: 'bDiddy', full_name: "DonBranCai", password: "password"}
])

Post.create!([
  {description: 'das a cat', author_id: 1, image_url: 'https://pixabay.com/photo-1333926/'},
  {description: 'das a dog', author_id: 1, image_url: 'https://pixabay.com/photo-1284702/'},
  {description: 'das a corgi', author_id: 3, image_url: 'https://pixabay.com/photo-14858/'},
  {description: 'das a kitty', author_id: 6, image_url: 'https://pixabay.com/photo-323262/'},
])