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

  parse: function(response){
    if(response.recipe_ingredients){
      this._recipeIngredients = new BrewSocial.Collections.RecipeIngredients(
        response.recipe_ingredients, {}
      );
      delete response.recipe_ingredients;
    };
    return response;
  }
});
