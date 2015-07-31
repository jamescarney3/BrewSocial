BrewSocial.Views.RecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show"],
  events: {
    "click .delete-recipe":"recipeDelete",
    "click .edit-recipe":"recipeEdit",
    "click .add-recipe":"recipeAdd"
  },

  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this, "recipeAdd", this.render);
  },
  
  recipeDelete: function(event){
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("users/" + BrewSocial.currentUser.id, {trigger: true});
  },

  recipeEdit: function(event){
    event.preventDefault();
    Backbone.history.navigate("recipes/" + this.model.id + "/edit", {trigger: true});
  },

  recipeAdd: function(event){
    event.preventDefault();
    var view = this;
    BrewSocial.currentUser.addRecipe(this.model, function(){
      view.model.users().add(BrewSocial.currentUser);
      view.render();
    });
  },

  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    return this;
  }

});
