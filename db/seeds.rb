# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create([
  {username: 'guest', full_name: "Guest", password: "password"},
  {username: 'bcai', full_name: "Brandon Cai", password: "derfboi"},
  {username: 'dtruong', full_name: "Devin Truman", password: "devintruong"},
  {username: 'tejakava', full_name: "Teja Kavall", password: "tejaswinikavallapa"},
  {username: 'wolverdude', full_name: "Jon Wolf", password: "awesomeTA"}
])

20.times do |user|
  User.create(username: Faker::Internet.user_name , full_name: Faker::Name.name, password: "password")
end

Post.create([
  # 1 - 5
  {description: 'Camping out, eating out', author_id: 5, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462580695/photo-1444228425018-ff8535a55c93_hogccu.jpg'},
  {description: 'Anyone down for sushi tonight?', author_id: 5, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462388196/vz1kf5fsbhlksevox6wp.jpg'},
  {description: 'A flan day is always a good day', author_id: 10, image_url: 'http://res.cloudinary.com/bcai/image/upload/s--FQAnElJb--/q_50/v1462578550/photo-1432139438709-ee8369449944_vaz2vb.jpg'},
  {description: 'The best bacon sliders ever!', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462578736/photo-1428660386617-8d277e7deaf2_w7vvpv.jpg'},
  {description: 'Can you believe these are store bought tomotoes?', author_id: 19, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462580199/photo-1444731961956-751ed90465a5_upro48.jpg'},

  # 6 - 10
  {description: 'Can\'t ever have enough garlic', author_id: 18, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462578723/photo-1453831210728-695502f9f795_louwfe.jpg'},
  {description: 'Chicken margarita tostadas anyone?', author_id: 15, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462578593/wcPXs84_ugmxm7.jpg'},
  {description: 'Ham and cheese for lunch', author_id: 10, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462578639/kiMPv4Q_w6s4zr.jpg'},
  {description: 'Freshly baked!', author_id: 4, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462578697/photo-1427025635812-0a30f21071e4_xmyrvl.jpg'},
  {description: 'Oh so good.', author_id: 5, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462388300/ab009bkzs6wxsrhog3xo.jpg'},

  # 11 - 15
  {description: 'Best burger in town. #bacon #datcheesedoe', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462156042/photo-1460306855393-0410f61241c7_rj67s8.jpg'},
  {description: '#spicy', author_id: 4, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462156091/photo-1455619452474-d2be8b1e70cd_svy3ux.jpg'},
  {description: 'My favorite pie. #cranberry', author_id: 3, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462156107/photo-1460380410874-537ecece3984_ay4cki.jpg'},
  {description: 'Spaghetti #simple #delicious', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462156331/photo-1458644267420-66bc8a5f21e4_wavmps.jpg'},
  {description: 'Blueberry pancakes', author_id: 1, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462763060/photo-1457556624253-528cc5b94213_otfgic.jpg'},

  # 16-20
  {description: 'The fish tastes so fresh', author_id: 9, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462763688/photo-1459432904503-d74cd0aa0a88_hekmzk.jpg'},
  {description: 'So good', author_id: 24, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462661312/z3bttplbhllxp85ciypu.jpg'},
  {description: 'A hearty breakfast', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764001/photo-1455853739633-8c94c03d8121_e0dsjt.jpg'},
  {description: 'Tastes like home', author_id: 25, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764030/photo-1456068452617-8d02d8160d72_cucykg.jpg'},
  {description: '#cakeislife', author_id: 18, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764056/photo-1457666134378-6b77915bd5f2_pdossv.jpg'},


  # 21-25
  {description: 'Open-face smoked salmon sandwich', author_id: 10, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764074/tHTHup3YTN6XsLwf43vY_IMG_8003.jpg_vhc0zv.jpg'},
  {description: 'Feeling clam(my)', author_id: 24, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764106/photo-1448043552756-e747b7a2b2b8_bbdsby.jpg'},
  {description: 'Macarons <3', author_id: 4, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764127/photo-1455560460927-c48345dd421d_ncxyam.jpg'},
  {description: 'Cobb Salad', author_id: 13, image_url: 'http://res.cloudinary.com/bcai/image/upload/c_crop,h_3554,q_50,w_3744,x_0,y_1311/v1462764153/photo-1459788931119-6879b722a759_hmm1br.jpg'},
  {description: 'Guilty pleasure', author_id: 1, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764199/photo-1457296795659-6f458be7a874_xsiaca.jpg'},
 

  # 26-29
  {description: 'French Toast', author_id: 23, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764265/photo-1455853659719-4b521eebc76d_rchf7r.jpg'},
  {description: 'Raspberry Panna Cotta', author_id: 7, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764307/photo-1452968011964-24f8831c43c3_u49ksr.jpg'},
  {description: 'Fresh out of the oven', author_id: 1, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462764346/photo-1450862479751-84eeaf2fcca4_lmqyyk.jpg'},
  {description: 'Soup of the day', author_id: 2, image_url: 'http://res.cloudinary.com/bcai/image/upload/q_50/v1462156129/photo-1449793079811-bc4bcd990abf_hiwd1y.jpg'}
])

Comment.create([
  {body: "Where is this at?", post_id: 29, user_id: 3},
  {body: "The one on Clement and 12th!", post_id: 29, user_id: 2},
  {body: "I love that place! Lets go sometime!", post_id: 29, user_id: 4},
  {body: "Count me in!", post_id: 29, user_id: 5},

  {body: "That looks so good.", post_id: 28, user_id: 18},
  {body: "Craving a croissant so badly right now.", post_id: 28, user_id: 23},

  {body: "Looks so creamy and sweet", post_id: 27, user_id: 25},

  {body: "Omg. That looks so good! Did you make that yourself?", post_id: 26, user_id: 3},
  {body: "Yeah! It's easy! I'll teach you how to make it. :)", post_id: 26, user_id: 23},

  {body: "Haha, how many did you get?", post_id: 25, user_id: 2},
  {body: "That's between me and my cupcakes. :P", post_id: 25, user_id: 1},

  {body: "Oo homemade?", post_id: 23, user_id: 2},
  {body: "Haha no they're store bought.", post_id: 23, user_id: 4},

  {body: "haha how punny", post_id: 22, user_id: 20},
  {body: ":3", post_id: 22, user_id: 24},

  {body: "open-faced?", post_id: 21, user_id: 8},
  {body: "No bread on top!", post_id: 21, user_id: 10},

  {body: "#dessertislife", post_id: 20, user_id: 20},
  {body: "yum!", post_id: 20, user_id: 21},

  {body: "I'd be so full after a meal like that.", post_id: 18, user_id: 4},
  {body: "Haha yeah, I'm getting food coma right now.", post_id: 18, user_id: 2},

  {body: "Waffle fries!", post_id: 17, user_id: 10},

  {body: "Those fish and chips look legit.", post_id: 16, user_id: 24},
  {body: "Gotta try some for myself!", post_id: 16, user_id: 7},

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
  {post_id: 29, user_id: 3},
  {post_id: 29, user_id: 2},
  {post_id: 29, user_id: 4},
  {post_id: 29, user_id: 5},
  {post_id: 29, user_id: 13},
  {post_id: 29, user_id: 23},
  {post_id: 29, user_id: 14},
  {post_id: 29, user_id: 22},
  {post_id: 29, user_id: 10},
  {post_id: 29, user_id: 1},

  {post_id: 28, user_id: 9},
  {post_id: 28, user_id: 2},
  {post_id: 28, user_id: 3},
  {post_id: 28, user_id: 4},
  {post_id: 28, user_id: 5},

  {post_id: 26, user_id: 9},
  {post_id: 26, user_id: 2},
  {post_id: 26, user_id: 3},
  {post_id: 26, user_id: 1},


  {post_id: 25, user_id: 9},
  {post_id: 25, user_id: 2},
  {post_id: 25, user_id: 3},
  {post_id: 25, user_id: 4},
  {post_id: 25, user_id: 5},
  {post_id: 25, user_id: 6},
  {post_id: 25, user_id: 7},
  {post_id: 25, user_id: 8},
  {post_id: 25, user_id: 19},
  {post_id: 25, user_id: 12},
  {post_id: 25, user_id: 13},

  {post_id: 24, user_id: 9},
  {post_id: 24, user_id: 2},
  {post_id: 24, user_id: 3},
  {post_id: 24, user_id: 4},
  {post_id: 24, user_id: 5},
  {post_id: 24, user_id: 6},
  {post_id: 24, user_id: 7},
  {post_id: 24, user_id: 8},
  {post_id: 26, user_id: 1},

  {post_id: 23, user_id: 9},
  {post_id: 23, user_id: 2},
  {post_id: 23, user_id: 3},
  {post_id: 23, user_id: 4},
  {post_id: 23, user_id: 5},
  {post_id: 23, user_id: 6},
  {post_id: 23, user_id: 7},
  {post_id: 23, user_id: 8},
  {post_id: 23, user_id: 19},
  {post_id: 23, user_id: 12},
  {post_id: 23, user_id: 13},
  {post_id: 23, user_id: 14},
  {post_id: 23, user_id: 15},
  {post_id: 23, user_id: 16},
  {post_id: 23, user_id: 17},
  {post_id: 23, user_id: 18},

  {post_id: 22, user_id: 19},
  {post_id: 22, user_id: 12},
  {post_id: 22, user_id: 1},

  {post_id: 20, user_id: 9},
  {post_id: 20, user_id: 2},
  {post_id: 20, user_id: 3},
  {post_id: 20, user_id: 4},
  {post_id: 20, user_id: 5},
  {post_id: 20, user_id: 6},
  {post_id: 20, user_id: 7},
  {post_id: 20, user_id: 8},
  {post_id: 20, user_id: 19},
  {post_id: 20, user_id: 12},
  {post_id: 20, user_id: 13},
  {post_id: 20, user_id: 14},
  {post_id: 20, user_id: 15},
  {post_id: 20, user_id: 16},
  {post_id: 20, user_id: 17},
  {post_id: 20, user_id: 18},
  {post_id: 20, user_id: 1},

  {post_id: 19, user_id: 9},
  {post_id: 19, user_id: 2},
  {post_id: 19, user_id: 3},
  {post_id: 19, user_id: 4},
  {post_id: 19, user_id: 5},
  {post_id: 19, user_id: 6},
  {post_id: 19, user_id: 7},
  {post_id: 19, user_id: 8},

  {post_id: 17, user_id: 9},
  {post_id: 17, user_id: 6},
  {post_id: 17, user_id: 7},
  {post_id: 17, user_id: 8},
  {post_id: 17, user_id: 1},

  {post_id: 16, user_id: 9},
  {post_id: 16, user_id: 2},
  {post_id: 16, user_id: 3},
  {post_id: 16, user_id: 4},
  {post_id: 16, user_id: 5},
  {post_id: 16, user_id: 6},
  {post_id: 16, user_id: 7},
  {post_id: 16, user_id: 8},

  {post_id: 13, user_id: 3},
  {post_id: 13, user_id: 2},
  {post_id: 13, user_id: 5},
  {post_id: 13, user_id: 4},
  {post_id: 13, user_id: 1},

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

Follow.create([
  {user_id: 2, follower_id: 1},
  {user_id: 3, follower_id: 1},
  {user_id: 4, follower_id: 1},
  {user_id: 5, follower_id: 1},
  {user_id: 6, follower_id: 1},
  {user_id: 7, follower_id: 1},
  {user_id: 8, follower_id: 1},
  {user_id: 9, follower_id: 1},
  {user_id: 10, follower_id: 1},
  {user_id: 11, follower_id: 1},
  {user_id: 12, follower_id: 1},
  {user_id: 13, follower_id: 1},
  {user_id: 14, follower_id: 1},
  {user_id: 15, follower_id: 1},
  {user_id: 16, follower_id: 1},
  {user_id: 17, follower_id: 1},
  {user_id: 18, follower_id: 1},
  {user_id: 19, follower_id: 1},
  {user_id: 20, follower_id: 1},


  {user_id: 1, follower_id: 2}, 
  {user_id: 3, follower_id: 2}, 
  {user_id: 4, follower_id: 2}, 
  {user_id: 5, follower_id: 2},
  {user_id: 6, follower_id: 2}, 
  {user_id: 7, follower_id: 2},

  {user_id: 1, follower_id: 3},
  {user_id: 2, follower_id: 3},
  {user_id: 4, follower_id: 3},
  {user_id: 5, follower_id: 3},

  {user_id: 1, follower_id: 4},
  {user_id: 2, follower_id: 4},
  {user_id: 3, follower_id: 4}
])