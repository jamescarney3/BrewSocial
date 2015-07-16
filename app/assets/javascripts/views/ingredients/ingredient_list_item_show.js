BrewSocial.Views.IngredientListItemShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_item_show"],
  tagName: "li",
  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
    this.subListIndex = options.subListIndex;
  },
  render: function(){
    var content = this.template({ingredient: this.model,
      subListIndex: this.subListIndex});
    this.$el.html(content);
    return this;
  }
});
