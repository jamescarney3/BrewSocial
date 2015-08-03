BrewSocial.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(BrewSocial.currentUser, "signIn signOut change", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "click #sign-in-link": "signIn",
    "click #sign-up-link": "signUp",
    "click #sign-in-as-guest-link": "signInAsGuest",
    "click #search" : "search"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: BrewSocial.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function(event){
    event.preventDefault();
    BrewSocial.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  signIn: function(event){
    event.preventDefault();
    Backbone.history.navigate("#/session/new", {trigger: true});
  },

  signUp: function(event){
    event.preventDefault();
    Backbone.history.navigate("#/users/new", {trigger: true});
  },

  signInAsGuest: function(event){
    event.preventDefault();
    BrewSocial.currentUser.signIn({
      username: "Stannis",
      password: "password"
    });
  },

  search: function(event){
    event.preventDefault();

    var query = this.$("#search-recipes").val();
    if(query == ""){ return; }; // no blank searches, please!

    var searchType = this.$("#search-type :checked").val();
    this.page = 1;

    Backbone.history.navigate(
      "#/search_recipes/" + searchType + "/" + query + "/" + this.page,
      {trigger: true}
    );

    // Need to: build in logic based on radio buttons for what kind of search
    // to do. Will also need to update which columns in recipes table are
    // searchable.

    // FROM MULTISEARCH FORM:
    // var query = this.$("#search-field").val();
    //
    // if(query != ""){
    //   Backbone.history.navigate("search/" + query, {trigger: true});
    // };

    // FROM SEARCH BY INGREDIENTS
    // var query = this.$("#search-field").val();
    //
    // if(query != ""){
    //   Backbone.history.navigate("#/recipes/search_by_ingredients/" + query, {trigger: true});
    // };

  },

});
