# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create([
  {username: 'guest', full_name: "Guest", password: "password"},
  {username: 'bcai', full_name: "Brandon Cai", password: "password"},
  {username: 'dtruong', full_name: "Devin Truong", password: "password"},
  {username: 'tejakava', full_name: "Tejaswini Kavallappa", password: "password"},
  {username: 'wolverdude', full_name: "Jon Wolverton", password: "awesomeTA"}
])

20.times do |user|
  User.create(username: Faker::Internet.user_name , full_name: Faker::Name.name, password: "password")
end

Post.create([
  {description: 'Camping out, eating out', author_id: 5, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462580695/photo-1444228425018-ff8535a55c93_hogccu.jpg'},
  {description: 'Anyone down for sushi tonight?', author_id: 5, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462388196/vz1kf5fsbhlksevox6wp.jpg'},
  {description: 'A flan day is always a good day', author_id: 10, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--FQAnElJb--/q_50/v1462578550/photo-1432139438709-ee8369449944_vaz2vb.jpg'},
  {description: 'The best bacon sliders ever!', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462578736/photo-1428660386617-8d277e7deaf2_w7vvpv.jpg'},
  {description: 'Can you believe these are store bought tomotoes?', author_id: 19, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462580199/photo-1444731961956-751ed90465a5_upro48.jpg'},
  {description: 'Can\'t ever have enough garlic', author_id: 18, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462578723/photo-1453831210728-695502f9f795_louwfe.jpg'},
  {description: 'Chicken margarita tostadas anyone?', author_id: 15, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462578593/wcPXs84_ugmxm7.jpg'},
  {description: 'Ham and cheese for lunch', author_id: 10, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462578639/kiMPv4Q_w6s4zr.jpg'},
  {description: 'Freshly baked!', author_id: 4, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462578697/photo-1427025635812-0a30f21071e4_xmyrvl.jpg'},
  {description: 'Oh so good.', author_id: 5, image_url: 'http://res.cloudinary.com/bcai/image/upload/v1462388300/ab009bkzs6wxsrhog3xo.jpg'},
  {description: 'Best burger in town. #bacon #datcheesedoe', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--DgWsq3AF--/q_50/v1462156042/photo-1460306855393-0410f61241c7_rj67s8.webp'},
  {description: '#spicy', author_id: 4, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--bizMKI0P--/q_50/v1462156091/photo-1455619452474-d2be8b1e70cd_svy3ux.webp'},
  {description: 'My favorite pie. #cranberry', author_id: 3, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--ONJlQtpw--/q_50/v1462156107/photo-1460380410874-537ecece3984_ay4cki.webp'},
  {description: 'Spaghetti #simple #delicious', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--HcIipXJe--/q_50/v1462156331/photo-1458644267420-66bc8a5f21e4_wavmps.webp'},
  {description: 'Soup of the day', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--gwl6gtra--/q_50/v1462156129/photo-1449793079811-bc4bcd990abf_hiwd1y.webp'}
])

Comment.create([
  {body: "Where is this at?", post_id: 15, user_id: 3},
  {body: "Souplantation dude!", post_id: 15, user_id: 2},
  {body: "I love that place! Lets go sometime!", post_id: 15, user_id: 4},
  {body: "Count me in!", post_id: 15, user_id: 5},

  {body: "tejakava can't take spicy??", post_id: 12, user_id: 2},
  {body: "I can take the heat.", post_id: 12, user_id: 5},

  {body: "Can I have some?", post_id: 9, user_id: 3},
  {body: "Of course Devin!", post_id: 9, user_id: 4},

  {body: "Wow did you make that?", post_id: 10, user_id: 2},
  {body: "Yeah! Just finished frosting it.", post_id: 10, user_id: 5},

  {body: "Wow. That's a lot of garlic.", post_id: 6, user_id: 20},
  {body: "Haha, yeah it's my favorite", post_id: 6, user_id: 18},
  {body: "Nice! Haha, garlic breath all day.", post_id: 6, user_id: 22},

  {body: "Wow, they look really fresh!", post_id: 5, user_id: 18},
  {body: "Yeah I got them from Trader Joe's!", post_id: 5, user_id: 19},

  {body: "Wow, those look good.", post_id: 4, user_id: 5},
  {body: "I'm actually drooling.", post_id: 4, user_id: 3},

  {body: "Down", post_id: 2, user_id: 2},
  {body: "I'm in!", post_id: 2, user_id: 3},
  {body: "Count me in!", post_id: 2, user_id: 4},
  
  {body: "Wow! Cooking over a campfire? Thats awesome man.", post_id: 1, user_id: 2},
  {body: "So manly", post_id: 1, user_id: 2}
])

Like.create([
  {post_id: 15, user_id: 3},
  {post_id: 15, user_id: 2},
  {post_id: 15, user_id: 4},
  {post_id: 15, user_id: 5},
  {post_id: 15, user_id: 13},
  {post_id: 15, user_id: 23},
  {post_id: 15, user_id: 14},
  {post_id: 15, user_id: 22},
  {post_id: 15, user_id: 10},

  {post_id: 13, user_id: 3},
  {post_id: 13, user_id: 2},
  {post_id: 13, user_id: 5},
  {post_id: 13, user_id: 4},

  {post_id: 12, user_id: 9},
  {post_id: 12, user_id: 2},
  {post_id: 12, user_id: 3},
  {post_id: 12, user_id: 4},
  {post_id: 12, user_id: 5},
  {post_id: 12, user_id: 6},
  {post_id: 12, user_id: 7},
  {post_id: 12, user_id: 8},

  {post_id: 11, user_id: 8},
  {post_id: 11, user_id: 9},
  {post_id: 11, user_id: 10},

  {post_id: 10, user_id: 1},
  {post_id: 10, user_id: 2},
  {post_id: 10, user_id: 3},
  {post_id: 10, user_id: 4},
  {post_id: 10, user_id: 5},

  {post_id: 9, user_id: 1},
  {post_id: 9, user_id: 14},
  {post_id: 9, user_id: 15},
  {post_id: 9, user_id: 16},

  {post_id: 8, user_id: 2},
  {post_id: 8, user_id: 3},
  {post_id: 8, user_id: 4},
  {post_id: 8, user_id: 5},
  {post_id: 8, user_id: 6},
  {post_id: 8, user_id: 7},
  {post_id: 8, user_id: 8},
  {post_id: 8, user_id: 9},

  {post_id: 5, user_id: 1},
  {post_id: 5, user_id: 2},
  {post_id: 5, user_id: 3},
  {post_id: 5, user_id: 4},
  {post_id: 5, user_id: 5},
  {post_id: 5, user_id: 6},
  {post_id: 5, user_id: 7},

  {post_id: 4, user_id: 1},
  {post_id: 4, user_id: 2},
  {post_id: 4, user_id: 3},
  {post_id: 4, user_id: 4},
  {post_id: 4, user_id: 5},
  {post_id: 4, user_id: 6},
  {post_id: 4, user_id: 7},
  {post_id: 4, user_id: 8},
  {post_id: 4, user_id: 9},
  {post_id: 4, user_id: 10},
  {post_id: 4, user_id: 11},
  {post_id: 4, user_id: 12},
  {post_id: 4, user_id: 13},
  {post_id: 4, user_id: 14},

  {post_id: 3, user_id: 3},

  {post_id: 2, user_id: 7},
  {post_id: 2, user_id: 2},
  {post_id: 2, user_id: 3},
  {post_id: 2, user_id: 4},
  {post_id: 2, user_id: 5},
  {post_id: 2, user_id: 6},

  {post_id: 1, user_id: 1},
  {post_id: 1, user_id: 2},
  {post_id: 1, user_id: 3},
  {post_id: 1, user_id: 4},
  {post_id: 1, user_id: 5},
  {post_id: 1, user_id: 6},
  {post_id: 1, user_id: 7},
  {post_id: 1, user_id: 8},
  {post_id: 1, user_id: 9},
  {post_id: 1, user_id: 10},
  {post_id: 1, user_id: 11},
  {post_id: 1, user_id: 12},
  {post_id: 1, user_id: 13},
  {post_id: 1, user_id: 14},
  {post_id: 1, user_id: 15},
  {post_id: 1, user_id: 16},
  {post_id: 1, user_id: 17}
  
])