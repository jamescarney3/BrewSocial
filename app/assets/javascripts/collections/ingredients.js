BrewSocial.Collections.Ingredients = Backbone.Collection.extend({
  model: BrewSocial.Models.Ingredient,
  url: "/api/ingredients",
  comparator: "name",
  getOrFetch: function(id){
    var mod = this.get(id);

    var mods = this;

    if (mod){
      mod.fetch();
    } else {
      mod = new this.model({id: id});
      mod.fetch({
        success: function(){
          mods.add(mod);
        }
      });
    };
    return mod;
  }
});
