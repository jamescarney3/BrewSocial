BrewSocial.Views.RecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show"],
  events: {
    "click .delete-recipe":"recipeDelete",
    "click .edit-recipe":"recipeEdit"
  },
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
  },
  recipeDelete: function(event){
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  },
  recipeEdit: function(event){
    event.preventDefault();
    Backbone.history.navigate("recipes/" + this.model.id + "/edit", {trigger: true});
  },
  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    return this;
  }

});
