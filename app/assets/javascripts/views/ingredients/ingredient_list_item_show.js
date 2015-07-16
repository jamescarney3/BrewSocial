BrewSocial.Views.IngredientListItemShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_item_show"],
  tagName: "li",
  events: {
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
    this.parent = options.parent;
  },
  removeIngredient: function(event){
    event.preventDefault();
    this.parent.removeSubview("#added-ingredients", this);
  },
  render: function(){
    var content = this.template({ingredient: this.model,
      subListIndex: this.subListIndex});
    this.$el.html(content);
    return this;
  }
});
