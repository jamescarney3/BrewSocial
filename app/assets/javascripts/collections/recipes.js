BrewSocial.Collections.Recipes = Backbone.Collection.extend({
  model: BrewSocial.Models.Recipe,
  url: "/api/recipes",
  getOrFetch: function(id){
    var recipe = this.get(id);

    var recipes = this;

    if (recipe){
      recipe.fetch();
    } else {
      recipe = new this.model({id: id});
      recipe.fetch({
        success: function(){
          recipes.add(recipe);
        }
      });
    };
    return recipe;
  }
});
