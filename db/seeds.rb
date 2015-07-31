# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "Stannis",
  password: "password",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/stannis.png")
  )
User.create(username: "JonSnow",
  password: "nothing",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/jonsnow.png")
  )
User.create(username: "Hodor",
  password: "hodorhodor",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/hodor.png")
  )
User.create(username: "SampleUser", password: "samplepassword")

rec1 = Recipe.create(author_id: 1,
title: "Fratricide ESB",
style: "ESB",
procedure: "Mash at 154F (68C) 60 mins, increase to 168F (76C) 5 minutes, recirculate. Run off wort, sparge with 170F water, boil 90 mins. Equinox & Fuggles at 15 mins, Cascade at 60 mins. Cool & transfer to fermenter, aerate, pitch yeast. Kill Renly with blood magic. Ferment at 70F (21C) until yeast activity diminishes, prime and rack to secondary and bottle when beer falls clear.",
is_private: false,
image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew8.png")
)

rec2 = Recipe.create(author_id: 2,
  title: "Night's Watch Eisbock",
  style: "Eisbock",
  procedure: "Mash at 152F 90 mins, boil 120 mins. Amarillo at 110 minutes. Transfer to fermenter, add water to bring volume to 5 gallons, cool & pitch yeast. Ferment until yeast activity subsides, defend wall from all-out wildling attack. Lager at 30F 4 weeks, skimming ice regularly, bottle or keg.",
  is_private: true,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew6.png")
  )

rec3 = Recipe.create(author_id: 3,
  title: "Weirwood",
  style: "Saison",
  procedure: "Mash grains at 152F for 90 mins, boil fpr 75 mins (Nelson Sauvin at 60 mins, orange and coriander at 70 mins). Cool to room temp, aerate, and add water to bring volume to 5 gal. Primary & secondary ferment 3 weeks each at 75F, prime & condition in swing-top bottles.",
  is_private: true,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew2.png")
  )

rec4 = Recipe.create(author_id: 1,
  title: "Blackwater",
  style: "Schwarzbier",
  procedure: "Infusion mash at 152F (67C) for 90 mins, boil 90 mins, .67oz Citra 85 mins to 90 mins. Lead disastrous naval attack on capitol city, retreat shamefully. Ferment 2 weeks at 64F, secondary ferment 2 weeks, prime and keg or bottle condition 2 weeks.",
  is_private: true,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew1.png")
  )

Ingredient.create(name: "Schill Vienna Malt (crushed)", role: 1)
Ingredient.create(name: "Breiss Caramel Malt (crushed)", role: 1)
Ingredient.create(name: "Breiss 2-Row Brewer's Malt (crushed)", role: 1)
Ingredient.create(name: "Maillard Amber Malt (extract syrup)", role: 1)
Ingredient.create(name: "Munton's Amber Malt (dme)", role: 1)
Ingredient.create(name: "Breiss Golden Light (dme)", role: 1)
Ingredient.create(name: "Breiss Goldpils Vienna Malt (dme)", role: 1)
Ingredient.create(name: "Simpsons Chocolate Malt (crushed)", role: 1)
Ingredient.create(name: "Rahr White Wheat Malt (crushed)", role: 1)
Ingredient.create(name: "Weyermann Rye Malt (crushed)", role: 1)


Ingredient.create(name: "Citra Hops (pellet)", role: 2)
Ingredient.create(name: "Equinox Hops (pellet)", role: 2)
Ingredient.create(name: "Simcoe Hops (whole leaf)", role: 2)
Ingredient.create(name: "Amarillo Hops (whole leaf)", role: 2)
Ingredient.create(name: "Fuggles Hops (whole leaf)", role: 2)
Ingredient.create(name: "Calypso Hops (pellet)", role: 2)
Ingredient.create(name: "Cascade Hops (whole leaf)", role: 2)
Ingredient.create(name: "Waimea Hops (pellet)", role: 2)
Ingredient.create(name: "Nelson Sauvin Hops (pellet)", role: 2)
Ingredient.create(name: "Polaris Hops (pellet)", role: 2)

Ingredient.create(name: "Danstar American West Coast Ale Yeast (dry)", role: 3)
Ingredient.create(name: "Danstar Windsor Ale Yeast (dry)", role: 3)
Ingredient.create(name: "White Labs Platinum Strain Yeast (dry)", role: 3)
Ingredient.create(name: "Safale S-04 Ale Yeast (dry)", role: 3)
Ingredient.create(name: "White Labs WLP565 Saison Yeast (liquid)", role: 3)

Ingredient.create(name: "Cherries (dried)", role: 3)
Ingredient.create(name: "Orange Peel (fresh)", role: 3)
Ingredient.create(name: "Coriander (seeds)", role: 3)
Ingredient.create(name: "Coriander (crushed)", role: 3)
Ingredient.create(name: "Vanilla (dried)", role: 3)

rec1.recipe_ingredients.create({ingredient_id: 3, amount: 9, unit: "lbs"})
rec1.recipe_ingredients.create({ingredient_id: 6, amount: 1, unit: "lbs"})
rec1.recipe_ingredients.create({ingredient_id: 12, amount: 0.5, unit: "oz"})
rec1.recipe_ingredients.create({ingredient_id: 15, amount: 1, unit: "oz"})
rec1.recipe_ingredients.create({ingredient_id: 17, amount: 0.75, unit: "oz"})
rec1.recipe_ingredients.create({ingredient_id: 22, amount: 11, unit: "g"})

rec2.recipe_ingredients.create({ingredient_id: 3, amount: 5, unit: "lbs"})
rec2.recipe_ingredients.create({ingredient_id: 14, amount: 0.75, unit: "oz"})
rec2.recipe_ingredients.create({ingredient_id: 24, amount: 7, unit: "g"})

rec3.recipe_ingredients.create({ingredient_id: 7, amount: 12, unit: "lbs"})
rec3.recipe_ingredients.create({ingredient_id: 19, amount: 1.5, unit: "oz"})
rec3.recipe_ingredients.create({ingredient_id: 27, amount: 1, unit: "tsp"})
rec3.recipe_ingredients.create({ingredient_id: 29, amount: 1, unit: "tsp"})
rec3.recipe_ingredients.create({ingredient_id: 25, amount: 7, unit: "g"})

rec4.recipe_ingredients.create({ingredient_id: 7, amount: 7, unit: "lbs"})
rec4.recipe_ingredients.create({ingredient_id: 8, amount: 1.5, unit: "lbs"})
rec4.recipe_ingredients.create({ingredient_id: 9, amount: 4, unit: "oz"})
rec4.recipe_ingredients.create({ingredient_id: 11, amount: 0.67, unit: "oz"})
rec4.recipe_ingredients.create({ingredient_id: 23, amount: 11, unit: "g"})
