# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

stannis = User.create!(
  username: "Stannis",
  password: "password",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/stannis.png")
)
jon = User.create!(
  username: "JonSnow",
  password: "nothing",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/jonsnow.png")
)
hodor = User.create!(
  username: "Hodor",
  password: "hodorhodor",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/hodor.png")
)
danerys = User.create!(
  username: "Danerys",
  password: "dragons",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/danerys.png")
)
cersei = User.create!(
  username: "Cersei",
  password: "lannister",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/cersei.png")
)
sample = User.create!(
  username: "Nobody",
  password: "password",
  avatar: File.new("#{Rails.root}/app/assets/images/seed_avatars/nobody.png")
)


rec1 = Recipe.create!(
  author: stannis,
  title: "Fratricide ESB",
  style: "ESB",
  procedure: "Mash at 154F (68C) 60 mins, increase to 168F (76C) 5 minutes, recirculate. Run off wort, sparge with 170F water, boil 90 mins. Equinox & Fuggles at 15 mins, Cascade at 60 mins. Cool & transfer to fermenter, aerate, pitch yeast. Kill Renly with blood magic. Ferment at 70F (21C) until yeast activity diminishes, prime and rack to secondary and bottle when beer falls clear.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew1.png")
)

rec2 = Recipe.create!(
  author: jon,
  title: "Night's Watch Eisbock",
  style: "Eisbock",
  procedure: "Mash at 152F 90 mins, boil 120 mins. Amarillo at 110 minutes. Transfer to fermenter, add water to bring volume to 5 gallons, cool & pitch yeast. Ferment until yeast activity subsides, defend wall from all-out wildling attack. Lager at 30F 4 weeks, skimming ice regularly, bottle or keg.",
  is_private: true,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew2.png")
)

rec3 = Recipe.create!(
  author: jon,
  title: "Weirwood",
  style: "Saison",
  procedure: "Mash grains at 152F for 90 mins, boil fpr 75 mins (Nelson Sauvin at 60 mins, orange and coriander at 70 mins). Cool to room temp, aerate, and add water to bring volume to 5 gal. Primary & secondary ferment 3 weeks each at 75F, prime & condition in swing-top bottles.",
  is_private: true,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew3.png")
)

rec4 = Recipe.create!(
  author: stannis,
  title: "Blackwater",
  style: "Schwarzbier",
  procedure: "Infusion mash at 152F (67C) for 90 mins, boil 90 mins, .67oz Citra 85 mins to 90 mins. Lead disastrous naval attack on capitol city, retreat shamefully. Ferment 2 weeks at 64F, secondary ferment 2 weeks, prime and keg or bottle condition 2 weeks.",
  is_private: true,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew8.png")
)

rec5 = Recipe.create!(
  author: danerys,
  title: "Dragonfire",
  style: "Cider",
  procedure: "Grind and press apples, add ginger, pepper extract, and ale yeast. Ferment 2 weeks at 60-70 degrees, begin systematically eliminating enemies via ignition, secondary ferment 2 weeks, prime and condition in dark glass growlers.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/dragonfire.png")
)

rec6 = Recipe.create!(
  author: cersei,
  title: "Red Keep",
  style: "Irish Red Ale",
  procedure: "Steep grains as desired at 160F for 1 hr, boil and bitter 15 min Williamette hops, Fuggles 0 min (aromatic only). Ferment at 60F, pass off illegitimate children as heirs to the Iron Throne, prime and bottle condition at 52F for 30 days.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew4.png")
)

rec7 = Recipe.create!(
  author: hodor,
  title: "Hodor",
  style: "Hodor",
  procedure: "Hodor hodor, hodorhodor. Hodor hodor hodor hodor hodor; hodor hodorhodor. Hodor hodor. Hodorhodor hodor hodorhodorhodor. Hodor, hodor hodor.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew16.png")
)

rec8 = Recipe.create!(
  author: stannis,
  title: "Siege Breaker IPA",
  style: "IPA",
  procedure: "Steep grains at 160F for 1hr, sparge like your life depends on it, and boil to reduce volume to 5gal.  Hop additions: half Citra at 30mins (bittering), second half with 5 mins remaining in boil (aroma). Ferment 3 weeks primary or until someone can finally smuggle additional supplies into Storm's End, transfer to secondary for 3 weeks or until beer falls clear. Prime and bottle.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew9.png")
)

rec9 = Recipe.create!(
  author: jon,
  title: "Take the Black IPA",
  style: "Black IPA",
  procedure: "Steep grains at 154F for 90mins, remove spent grains and boil 2hrs.  Add calypso, cascade, and polaris hops in order with 40, 10, and 5 minutes remaining in boil respectively. Add water to bring volume to 5gal, chill to 70F if necessary before pitching yeast. Ferment 4 weeks, wonder about what happened to Benjen, prime and bottle.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew10.png")
)

rec10 = Recipe.create!(
  author: stannis,
  title: "Rightful Successor",
  style: "IPA",
  procedure: "Steep grains at 162F for 80 mins, resent Robert, remove spent grains and boil 1hr.  Simcoe at 30 mins remaining, Amarillo at 10 mins remaining. While wort cools to 65F, dispatch ravens to all holds in the kingdom questioning the legitimacy of Robert's 'Children.' Pitch yeast, ferment 5 weeks, prime with sugar if no kingsblood available, bottle and age.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew11.png")
)

rec11 = Recipe.create!(
  author: jon,
  title: "For the Watch",
  style: "IPA",
  procedure: "Steep grains at 152F for 90mins, sparge, boil to reduce volume to 8gal. When wort reaches 8gal, add Williamette, Fuggles, and Equinox hops with 40, 20, and 10 minutes remaining. Chill wort to 65F, pitch yeast, transfer to primary fermenter. Prime and botle after 4 weeks, condition for another 2 weeks before opening.",
  is_private: false,
  image: File.new("#{Rails.root}/app/assets/images/seed_images/homebrew12.png")
)

ingredient_1 = Ingredient.create!(name: "Schill Vienna Malt (crushed)")
ingredient_2 = Ingredient.create!(name: "Breiss Caramel Malt (crushed)")
ingredient_3 = Ingredient.create!(name: "Breiss 2-Row Brewer's Malt (crushed)")
ingredient_4 = Ingredient.create!(name: "Maillard Amber Malt (extract syrup)")
ingredient_5 = Ingredient.create!(name: "Munton's Amber Malt (dme)")
ingredient_6 = Ingredient.create!(name: "Breiss Golden Light (dme)")
ingredient_7 = Ingredient.create!(name: "Breiss Goldpils Vienna Malt (dme)")
ingredient_8 = Ingredient.create!(name: "Simpsons Chocolate Malt (crushed)")
ingredient_9 = Ingredient.create!(name: "Rahr White Wheat Malt (crushed)")
ingredient_10 = Ingredient.create!(name: "Weyermann Rye Malt (crushed)")

ingredient_11 = Ingredient.create!(name: "Citra Hops (pellet)")
ingredient_12 = Ingredient.create!(name: "Equinox Hops (pellet)")
ingredient_13 = Ingredient.create!(name: "Simcoe Hops (whole leaf)")
ingredient_14 = Ingredient.create!(name: "Amarillo Hops (whole leaf)")
ingredient_15 = Ingredient.create!(name: "Fuggles Hops (whole leaf)")
ingredient_16 = Ingredient.create!(name: "Calypso Hops (pellet)")
ingredient_17 = Ingredient.create!(name: "Cascade Hops (whole leaf)")
ingredient_19 = Ingredient.create!(name: "Nelson Sauvin Hops (pellet)")
ingredient_20 = Ingredient.create!(name: "Polaris Hops (pellet)")

ingredient_21 = Ingredient.create!(name: "Danstar American West Coast Ale Yeast (dry)")
ingredient_22 = Ingredient.create!(name: "White Labs Platinum Strain Yeast (dry)")
ingredient_23 = Ingredient.create!(name: "Safale S-04 Ale Yeast (dry)")
ingredient_24 = Ingredient.create!(name: "White Labs WLP565 Saison Yeast (liquid)")

ingredient_25 = Ingredient.create!(name: "Cherries (dried)")
ingredient_26 = Ingredient.create!(name: "Orange Peel (fresh)")
ingredient_27 = Ingredient.create!(name: "Coriander (seeds)")
ingredient_28 = Ingredient.create!(name: "Coriander (crushed)")
ingredient_29 = Ingredient.create!(name: "Vanilla (dried)")

ingredient_30 = -> { raise 'No ingredient 30.'}

ingredient_31 = Ingredient.create!(name: "Ginger (fresh)")
ingredient_32 = Ingredient.create!(name: "Bird chili (extract)")
ingredient_33 = Ingredient.create!(name: "Apples (from Highgarden)")


ingredient_34 = Ingredient.create!(name: "British Crystal Malt (crushed)")
ingredient_35 = Ingredient.create!(name: "Roasted Barley")
ingredient_36 = Ingredient.create!(name: "Caramel Crystal Malt (crushed)")
ingredient_37 = Ingredient.create!(name: "Irish Ale Yeast (dry)")
ingredient_38 = Ingredient.create!(name: "Williamette Hops (whole leaf)")
ingredient_39 = Ingredient.create!(name: "Pale Liquid Malt Extract")

ingredient_40 = Ingredient.create!(name: "Hodor")

rec1.recipe_ingredients.create!({ingredient: ingredient_3, amount: 9, unit: "lbs"})
rec1.recipe_ingredients.create!({ingredient: ingredient_6, amount: 1, unit: "lbs"})
rec1.recipe_ingredients.create!({ingredient: ingredient_12, amount: 0.5, unit: "oz"})
rec1.recipe_ingredients.create!({ingredient: ingredient_15, amount: 1, unit: "oz"})
rec1.recipe_ingredients.create!({ingredient: ingredient_17, amount: 0.75, unit: "oz"})
rec1.recipe_ingredients.create!({ingredient: ingredient_22, amount: 11, unit: "g"})

rec2.recipe_ingredients.create!({ingredient: ingredient_3, amount: 5, unit: "lbs"})
rec2.recipe_ingredients.create!({ingredient: ingredient_14, amount: 0.75, unit: "oz"})
rec2.recipe_ingredients.create!({ingredient: ingredient_24, amount: 7, unit: "g"})

rec3.recipe_ingredients.create!({ingredient: ingredient_7, amount: 12, unit: "lbs"})
rec3.recipe_ingredients.create!({ingredient: ingredient_19, amount: 1.5, unit: "oz"})
rec3.recipe_ingredients.create!({ingredient: ingredient_27, amount: 1, unit: "tsp"})
rec3.recipe_ingredients.create!({ingredient: ingredient_29, amount: 1, unit: "tsp"})
rec3.recipe_ingredients.create!({ingredient: ingredient_25, amount: 7, unit: "g"})

rec4.recipe_ingredients.create!({ingredient: ingredient_7, amount: 7, unit: "lbs"})
rec4.recipe_ingredients.create!({ingredient: ingredient_8, amount: 1.5, unit: "lbs"})
rec4.recipe_ingredients.create!({ingredient: ingredient_9, amount: 4, unit: "oz"})
rec4.recipe_ingredients.create!({ingredient: ingredient_11, amount: 0.67, unit: "oz"})
rec4.recipe_ingredients.create!({ingredient: ingredient_3, amount: 11, unit: "g"})

rec5.recipe_ingredients.create!(ingredient: ingredient_31, amount: 20, unit: "oz")
rec5.recipe_ingredients.create!(ingredient: ingredient_32, amount: 1, unit: "oz")
rec5.recipe_ingredients.create!(ingredient: ingredient_33, amount: 10, unit: "lbs")
rec5.recipe_ingredients.create!(ingredient: ingredient_21, amount: 6, unit: "g")

rec6.recipe_ingredients.create!(ingredient: ingredient_34, amount: 0.6, unit: "lbs")
rec6.recipe_ingredients.create!(ingredient: ingredient_35, amount: 0.25, unit: "lbs")
rec6.recipe_ingredients.create!(ingredient: ingredient_36, amount: 0.25, unit: "lbs")
rec6.recipe_ingredients.create!(ingredient: ingredient_37, amount: 7.5, unit: "g")
rec6.recipe_ingredients.create!(ingredient: ingredient_38, amount: 1, unit: "oz")
rec6.recipe_ingredients.create!(ingredient: ingredient_39, amount: 6, unit: "lbs")
rec6.recipe_ingredients.create!(ingredient: ingredient_15, amount: 2, unit: "oz")

rec7.recipe_ingredients.create!(ingredient: ingredient_40, amount: 10, unit: "hodor")
rec7.recipe_ingredients.create!(ingredient: ingredient_40, amount: 5, unit: "hodor")
rec7.recipe_ingredients.create!(ingredient: ingredient_40, amount: 1, unit: "hodor")
rec7.recipe_ingredients.create!(ingredient: ingredient_40, amount: 7, unit: "hodor")

rec8.recipe_ingredients.create!(ingredient: ingredient_34, amount: 5, unit: "lbs")
rec8.recipe_ingredients.create!(ingredient: ingredient_36, amount: 2, unit: "lbs")
rec8.recipe_ingredients.create!(ingredient: ingredient_11, amount: 1.5, unit: "oz")
rec8.recipe_ingredients.create!(ingredient: ingredient_23, amount: 7, unit: "g")

rec9.recipe_ingredients.create!(ingredient: ingredient_1, amount: 5, unit: "lbs")
rec9.recipe_ingredients.create!(ingredient: ingredient_8, amount: 2, unit: "lbs")
rec9.recipe_ingredients.create!(ingredient: ingredient_16, amount: 1, unit: "oz")
rec9.recipe_ingredients.create!(ingredient: ingredient_17, amount: 0.25, unit: "oz")
rec9.recipe_ingredients.create!(ingredient: ingredient_20, amount: 0.5, unit: "oz")
rec9.recipe_ingredients.create!(ingredient: ingredient_23, amount: 7, unit: "g")

rec10.recipe_ingredients.create!(ingredient: ingredient_2, amount: 5, unit: "lbs")
rec10.recipe_ingredients.create!(ingredient: ingredient_13, amount: 0.5, unit: "oz")
rec10.recipe_ingredients.create!(ingredient: ingredient_14, amount: 0.75, unit: "oz")
rec10.recipe_ingredients.create!(ingredient: ingredient_22, amount: 7, unit: "g")

rec11.recipe_ingredients.create!(ingredient: ingredient_2, amount: 5, unit: "lbs")
rec11.recipe_ingredients.create!(ingredient: ingredient_5, amount: 3, unit: "lbs")
rec11.recipe_ingredients.create!(ingredient: ingredient_38, amount: 0.5, unit: "oz")
rec11.recipe_ingredients.create!(ingredient: ingredient_15, amount: 0.75, unit: "oz")
rec11.recipe_ingredients.create!(ingredient: ingredient_12, amount: 0.75, unit: "oz")
rec11.recipe_ingredients.create!(ingredient: ingredient_21, amount: 11, unit: "g")

stannis.recipe_adds.create(recipe_id: 2)
stannis.recipe_adds.create(recipe_id: 3)
