BrewSocial.Views.IngredientListItemShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_item_show"],
  tagName: "li",
  events: {
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
    this.subListIndex = options.subListIndex;
  },
  removeIngredient: function(event){
    event.preventDefault();
    this.remove();
  },
  render: function(){
    var content = this.template({ingredient: this.model,
      subListIndex: this.subListIndex});
    this.$el.html(content);
    return this;
  }
});
