# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
full_name       | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
post_id         | integer   | not null, foreign key (references posts), indexed

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
filename    | string    | not null
binary_data | binary    | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts),
indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | string    | not null, foreign key (references posts), indexed

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followed_id | integer   | not null, foreign key (references users), indexed
follower_id | integer   | not null, foregin key (references users),
indexed


