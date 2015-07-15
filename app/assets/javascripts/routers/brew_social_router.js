BrewSocial.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
    this.recipes = options.recipes;
  },
  routes: {
    "users/:id":"userShow",
    "recipes/new":"recipeNew",
    "recipes/:id":"recipeShow"
  },
  userShow: function(id){
    var user = this.users.getOrFetch(id);
    var view = new BrewSocial.Views.UserShow({model: user});
    this.$rootEl.html(view.render().$el);
  },
  recipeShow: function(id){
    var recipe = this.recipes.getOrFetch(id);
    var view = new BrewSocial.Views.RecipeShow({model: recipe});
    this.$rootEl.html(view.render().$el);
  },
  recipeNew: function(){
    var recipe = new BrewSocial.Models.Recipe();
    var view = new BrewSocial.Views.RecipeForm({model: recipe});
    this.$rootEl.html(view.render().$el);
  }
});
