BrewSocial.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  apiUrlRoot: "#/users/",

  toJSON: function(){
    return { user: _.clone(this.attributes) }
  },

  saveFormData: function(formData, options){
    var method = this.isNew() ? "POST" : "PUT";
    var model = this;
    $.ajax({
      url: _.result(model, "url"),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp){
        BrewSocial.currentUser.signIn(options.credentials);
        Backbone.history.navigate("", {trigger: true});
      },
      error: function(resp){
        options.error && options.error(model, resp, options);
      }
    });
  },

  isCurrentUser: function(){
    if(!BrewSocial.currentUser){
      return false;
    }else{
      if(this.id == BrewSocial.currentUser.id){
        return true;
      }else{
        return false;
      };
    };
  },

  addRecipe: function(recipe, callback){
    var newRecipeAdd = new BrewSocial.Models.RecipeAdd({
      recipe_id: recipe.id,
      user_id: this.id
    });
    newRecipeAdd.save({},{
      success: callback
    });
  },

  removeAddedRecipe: function(id){
    var recipeAdd = this.recipeAdds().get(id);
    recipeAdd.destroy();
  },

  authoredRecipes: function(){
    if(!this._authoredRecipes){
      this._authoredRecipes = new BrewSocial.Collections.Recipes();
    }
    return this._authoredRecipes;
  },

  recipes: function(){
    if(!this._recipes){
      this._recipes = new BrewSocial.Collections.Recipes();
    }
    return this._recipes;
  },

  recipeAdds: function(){
    if(!this._recipe_adds){
      this._recipe_adds = new BrewSocial.Collections.RecipeAdds();
    };
    return this._recipe_adds;
  },

  parse: function(response){
    if(response.authored_recipes){
      this.authoredRecipes().set(response.authored_recipes);
      delete response.authored_recipes;
    };
    if(response.recipes){
      this.recipes().set(response.recipes);
      delete response.recipes;
    };
    if(response.recipe_adds){
      this.recipeAdds().set(response.recipe_adds);
      delete response.recipe_adds;
    };
    return response;
  }
}, {
  modelType: "User"
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
    }else{
      this.trigger("signOut");
    };
  }
});
