window.BrewSocial = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){

    new BrewSocial.Routers.Router({
      $rootEl: $("#content"),
      users: new BrewSocial.Collections.Users(),
      recipes: new BrewSocial.Collections.Recipes(),
      ingredients: new BrewSocial.Collections.Ingredients()
    });

    this.currentUser = new BrewSocial.Models.CurrentUser();
    this.currentUser.fetch();

    this.header = new BrewSocial.Views.Header({ el: "#header" });

    Backbone.history.start();
  }
};
