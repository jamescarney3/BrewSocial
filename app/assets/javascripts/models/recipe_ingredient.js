BrewSocial.Models.RecipeIngredient = Backbone.Model.extend({
  urlRoot: "/api/recipe_ingredients",

  initialize: function(options){
    if(options.ingredient){
      this.ingredient().set(options.ingredient);
    };
  },

  ingredient: function(){
    if(!this._ingredient){
      this._ingredient = new BrewSocial.Models.Ingredient();
    };
    return this._ingredient;
  },

  parse: function(response){
    if(response.ingredient){
      this.ingredient().set(response.ingredient);
      delete response.ingredient;
    };
    return response;
  }
});
