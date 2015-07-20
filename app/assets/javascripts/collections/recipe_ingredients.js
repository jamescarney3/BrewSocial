BrewSocial.Collections.RecipeIngredients = Backbone.Collection.extend({
  model: BrewSocial.Models.RecipeIngredient,
  url: "/api/recipe_ingredients",
  getOrFetch: function(id, callback){
    var mod = this.get(id);

    var mods = this;

    if (mod){
      mod.fetch();
    } else {
      mod = new this.model({id: id});
      mod.fetch({
        success: function(){
          mods.add(mod);
          callback(mod);
        }
      });
    };
    return mod;
  }
});
