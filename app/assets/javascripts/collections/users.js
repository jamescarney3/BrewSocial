BrewSocial.Collections.Users = Backbone.Collection.extend({
  model: BrewSocial.Models.User,
  url: "/api/users",
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

  search: function(searchType, query){
    var method = "GET";
    var collection = this;
    var resp = $.ajax({
      url: ("/api/users/browse/" + query),
      type: method,
      processData: false,
      contentType: false,
      success: function(resp){
        collection.set(resp.search_results, {parse: true});
        collection.totalCount = resp.total_count;
      }
    });
  }
});
