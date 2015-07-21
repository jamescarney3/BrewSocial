BrewSocial.Views.FeaturedRecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show"],
  render: function(){
    this.$el.html(this.template({recipe: this.model}));
    return this;
  }
});
