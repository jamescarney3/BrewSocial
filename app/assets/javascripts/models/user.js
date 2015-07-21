BrewSocial.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  toJSON: function(){
    return { user: _.clone(this.attributes) }
  },

  authoredRecipes: function(){
    if(!this._authoredRecipes){
      this._authoredRecipes = new BrewSocial.Collections.Recipes();
    }
    return this._authoredRecipes;
  },

  parse: function(response){
    if(response.authored_recipes){
      this._authoredRecipes = new BrewSocial.Collections.Recipes(
        response.authored_recipes
      );
      delete response.authored_recipes;
    };
    return response;
  }
});

BrewSocial.Models.CurrentUser = BrewSocial.Models.User.extend({
  url: "api/session",

  initialize: function(options){
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isSignedIn: function(){
    return !this.isNew();
  },

  signIn: function(options){
    var model = this;
    var credentials = {
      "user[username]": options.username,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data){
        model.set(data);
        options.success && options.success();
      },
      error: function(){
        options.error && options.error();
      }
    });
  },

  signOut: function(options){
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data){
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function(){
    if(this.isSignedIn()){
      this.trigger("signIn");
      // console.log("currentUser is signed in! ", this);
    }else{
      this.trigger("signOut");
      // console.log("currentUser is signed out!", this);
    };
  }
});
