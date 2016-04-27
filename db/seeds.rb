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