BrewSocial.Views.IngredientInput = Backbone.CompositeView.extend({
  template: JST["ingredients/input"],
  tagName: "li",
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    var content = this.template({ingredients: this.collection});
    this.$el.html(content);
    return this;
  }
});
