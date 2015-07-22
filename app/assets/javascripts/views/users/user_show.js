BrewSocial.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],
  events: {
    "click button.recipe-remove":"removeAddedRecipe"
  },
  initialize: function(){
    console.log(this.model.recipeAdds());
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.recipeAdds(), "remove", this.render);
  },
  removeAddedRecipe: function(event){
    event.preventDefault();
    var id = $(event.currentTarget).data("recipe-add-id");
    this.model.removeAddedRecipe(id);
    this.model.recipeAdds().remove(id);
    console.log(this.model.recipeAdds());
  },

  render: function(){
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  }

});
