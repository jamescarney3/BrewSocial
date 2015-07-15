# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "Stannis", password: "password")
User.create(username: "JonSnow", password: "nothing")

Recipe.create(author_id: 1, title: "Fratricide ESB", style: "ESB", procedure: "Steep, mash, boil, bitter, kill brother with blood magic, pitch yeast, pirmary ferment, secondary ferment, prime, bottle.", is_private: false)
Recipe.create(author_id: 2, title: "Wall Ice", style: "Ice Lager", procedure: "It's cold up here, and I'd have to skim the ice off whether I wanted to or not.", is_private: true)

Ingredient.create(name: "Schill Vienna Malt", role: 1)
