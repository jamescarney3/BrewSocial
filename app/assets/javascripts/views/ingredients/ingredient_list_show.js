BrewSocial.Views.IngredientListItemShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_item_show"],
  tagName: "li",
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    var content = this.template({ingredient: this.model});
    this.$el.html(content);
    return this;
  }
});
