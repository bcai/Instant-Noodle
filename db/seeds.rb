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
  {description: 'das a cat', author_id: 1, image_url: 'https://pixabay.com/static/uploads/photo/2016/04/16/23/07/cat-1333926_960_720.jpg'},
  {description: 'das a dog', author_id: 1, image_url: 'https://pixabay.com/static/uploads/photo/2016/03/27/23/43/bernese-mountain-dog-1284702_960_720.jpg'},
  {description: 'das a corgi', author_id: 3, image_url: 'https://pixabay.com/static/uploads/photo/2012/02/19/10/48/corgi-14858_960_720.jpg'},
  {description: 'das a kitty', author_id: 6, image_url: 'https://pixabay.com/static/uploads/photo/2014/04/13/20/49/cat-323262_960_720.jpg'},
])