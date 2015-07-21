BrewSocial.Models.Recipe = Backbone.Model.extend({
  urlRoot: "/api/recipes",

  addIngredient: function(ingredient, amount, unit, callback){
    var join = new BrewSocial.Models.RecipeIngredient({
      recipe_id: this.id,
      ingredient_id: ingredient.id,
      amount: amount,
      unit: unit,
    });
    join.save({},{
      success: callback
    });
  },

  resetIngredients: function(){
    while (this.recipeIngredients().length > 0) {
      this.recipeIngredients().first().destroy();
    };
  },

  toJSON: function(){
    return { recipe: _.clone(this.attributes) }
  },

  recipeIngredients: function(){
    if (!this._recipeIngredients){
      this._recipeIngredients = {};
    };
    return this._recipeIngredients;
  },

  author: function(){
    if (!this._author){
      this._author = {};
    };
    return this._author;
  },

  users: function(){
    if(!this._users){
      this._users = new BrewSocial.Collections.Users();
    };
    return this._users;
  },

  parse: function(response){
    if(response.recipe_ingredients){
      this._recipeIngredients = new BrewSocial.Collections.RecipeIngredients(
        response.recipe_ingredients, {}
      );
      delete response.recipe_ingredients;
    };

    if(response.author){
      this._author = new BrewSocial.Models.User(
        response.author
      );
      delete response.author;
    };

    if(response.users){
      this._users = new BrewSocial.Collections.Users(
        response.users
      );
      delete response.users;
    };

    return response;
  }
});
