BrewSocial.Collections.Recipes = Backbone.Collection.extend({
  model: BrewSocial.Models.Recipe,
  modelName: "Recipe",
  url: "/api/recipes",

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
  },

  grabRandom: function(num){
    var method = "GET";
    var collection = this;
    var resp = $.ajax({
      url: ("/api/recipes/random/" + num),
      type: method,
      processData: false,
      contentType: false,
      success: function(resp){
        collection.set(resp, {parse: true});
      }
    });
  },

  search: function(searchType, query, page){
    var method = "GET";
    var collection = this;
    var resp = $.ajax({
      url: ("/api/recipes/" + searchType + "/" + query + "/" + page),
      type: method,
      processData: false,
      contentType: false,
      success: function(resp){
        collection.totalCount = resp.total_count;
        collection.set(resp.search_results, {parse: true});
      }
    });
  },

  preSearch: function(){
    var method = "GET";
    var collection = this;
    var resp = $.ajax({
      url: ("/api/recipes/browse"),
      type: method,
      processData: false,
      contentType: false,
      success: function(resp){
        collection.totalCount = resp.total_count;
        collection.set(resp.search_results, {parse: true});
      }
    });
  }

});
