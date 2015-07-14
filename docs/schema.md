# Schema Information

## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
style       | string    | not null
procedure   | text      | not null
is_private  | boolean   | not null


## ingredients
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | integer   | not null

## recipe_ingredients
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
recipe_id    | integer   | not null, foreign key (references recipes)
ingredient_id| integer   | not null, foreign key (references ingredients)
amount       | float     | not null
unit         | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | integer   | not null, foreign key (references recipes)
author_id   | integer   | not null, foreign key (references users)
body        | text      | not null
created_at  | datetime  | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users)
followee_id | integer   | not null, foreign key (references users)

## recipe_adds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
recipe_id   | integer   | not null, foreign key (references recipes)


## notifications
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
notifiable_id  | integer   | not null, foreign key (references users or recipes)
notifiable_type| string    | not null, foreign key (references users)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
bio             | text      |
password_digest | string    | not null
session_token   | string    | not null, unique
