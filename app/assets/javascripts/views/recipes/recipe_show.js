BrewSocial.Views.RecipeShow = Backbone.CompositeView.extend({
  template: _.template("<h1><%= recipe.escape('title') %></h1>"),
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },
  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    return this;
  }

});
