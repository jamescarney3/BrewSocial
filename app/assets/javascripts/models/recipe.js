BrewSocial.Models.Recipe = Backbone.Model.extend({
  urlRoot: "/api/recipes",
  apiUrlRoot: "#/recipes/",

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

  saveFormData: function(formData, options, callback){
    var method = this.isNew() ? "POST" : "PUT";
    var model = this;
    $.ajax({
      url: _.result(model, "url"),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp){
        callback(resp);
      },
      error: function(resp){
        options.error && options.error(model, resp, options);
      }
    });
  },

  toJSON: function(){
    return { recipe: _.clone(this.attributes) }
  },

  recipeIngredients: function(){
    if (!this._recipeIngredients){
      this._recipeIngredients = new BrewSocial.Collections.RecipeIngredients();
    };
    return this._recipeIngredients;
  },

  author: function(){
    if (!this._author){
      this._author = new BrewSocial.Models.User();
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
      this.recipeIngredients().set(response.recipe_ingredients);
      delete response.recipe_ingredients;
    };

    if(response.author){
      this.author().set(response.author);
      delete response.author;
    };

    if(response.users){
      this.users().set(response.users);
      delete response.users;
    };

    return response;
  }
}, {
  modelType: "Recipe"
});
