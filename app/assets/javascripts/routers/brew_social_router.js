BrewSocial.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
    this.recipes = options.recipes;
    this.ingredients = options.ingredients;
  },
  routes: {
    "":"welcomeShow",
    "users":"usersIndex",
    "users/new":"usersNew",
    "users/:id":"userShow",
    "recipes/new":"recipeNew",
    "recipes/:id":"recipeShow",
    "recipes/:id/edit":"recipeEdit",
    "session/new": "signIn",
    "search_recipes/:searchType/:query":"recipeSearch",
    // "search/:query":"search",
    "users/example":"userExample" // see useless example function below
  },

  userExample: function(){ // useless example, see rails router for corresponding route
    console.log("I fired!");
  },

  welcomeShow: function(){
    var view = new BrewSocial.Views.Welcome();
    this._swapView(view);
  },

  // search: function(query){
  //   var searchResults = new BrewSocial.Collections.SearchResults();
  //   var view = new BrewSocial.Views.SearchResultsIndex({
  //     collection: searchResults,
  //     query: query
  //   });
  //   this._swapView(view);
  // },

  recipeSearch: function(searchType, query){
    var searchResults = new BrewSocial.Collections.Recipes();
    var view = new BrewSocial.Views.SearchResultsIndex({
      collection: searchResults,
      searchType: searchType,
      query: query
    });
    this._swapView(view);
  },

  signIn: function(callback){
    if(!this._requireSignedOut(callback)) { return; }
    var view = new BrewSocial.Views.SignIn({
      callback: callback
    });
    this._swapView(view);
  },

  userShow: function(id){
    var user = this.users.getOrFetch(id);
    var view = new BrewSocial.Views.UserShow({model: user});

    this._swapView(view);
  },

  usersNew: function(){
    if (!this._requireSignedOut()) { return; }
    var user = new this.users.model();
    var view = new BrewSocial.Views.UsersForm({
      collection: this.users,
      model: user
    });
    this._swapView(view);
  },

  recipeShow: function(id){
    var recipe = this.recipes.getOrFetch(id);
    var view = new BrewSocial.Views.RecipeShow({model: recipe, ingredients: this.ingredients});
    this._swapView(view);
  },

  recipeNew: function(){
    var ingredients = this.ingredients;
    var recipe = new BrewSocial.Models.Recipe();
    var view = new BrewSocial.Views.RecipeForm({
      model: recipe,
      collection: this.recipes,
      ingredients: this.ingredients});
    this._swapView(view);
  },

  recipeEdit: function(id){
    var ingredients = this.ingredients;
    var recipe = this.recipes.getOrFetch(id);
    var view = new BrewSocial.Views.RecipeForm({
      model: recipe,
      collection: this.recipes,
      ingredients: this.ingredients});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  _requireSignedIn: function(callback){
    if (!BrewSocial.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    };
    return true;
  },

  _requireSignedOut: function(callback){
    if (BrewSocial.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    };
    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", {trigger: true});
  }
});
