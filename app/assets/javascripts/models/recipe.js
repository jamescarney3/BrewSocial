BrewSocial.Models.Recipe = Backbone.Model.extend({
  urlRoot: "/api/recipes",

  toJSON: function(){
    return { recipe: _.clone(this.attributes) }
  },

  ingredients: function(){
    if (!this._ingredients){
      this._ingredients = new BrewSocial.Collections.Ingredients(null, {recipe: this});
    };
    return this._ingredients;
  },

  parse: function(response){
    if(response.ingredients){
      this.ingredients().set(response.ingredients, {parse: true})
      delete response.ingredients;
    };
    return response;
  }
});
