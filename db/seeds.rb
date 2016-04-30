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
  {username: 'bDiddy', full_name: "DonBranCai", password: "password"},
  {username: 'guest', full_name: "Guest", password: "password"}
])

Post.create!([
  {description: 'Soup of the day', author_id: 3, image_url: 'https://images.unsplash.com/photo-1449793079811-bc4bcd990abf?crop=entropy&fit=crop&fm=jpg&h=850&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450'},
  {description: 'My favorite pie. #cranberry', author_id: 3, image_url: 'https://images.unsplash.com/photo-1460380410874-537ecece3984?crop=entropy&fit=crop&fm=jpg&h=850&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450'},
  {description: '#spicy', author_id: 2, image_url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?crop=entropy&fit=crop&fm=jpg&h=850&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450'},
  {description: 'Best burger in town. #bacon #datcheesedoe', author_id: 1, image_url: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?crop=entropy&fit=crop&fm=jpg&h=850&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450'},
])