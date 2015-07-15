window.BrewSocial = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){
    new BrewSocial.Routers.Router({
      $rootEl: $("#content"),
      users: new BrewSocial.Collections.Users(),
      recipes: new BrewSocial.Collections.Recipes()
    });
    Backbone.history.start();
  }
};
