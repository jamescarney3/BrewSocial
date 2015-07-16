BrewSocial.Views.IngredientListItemShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_item_show"],
  tagName: "li",
  events: {
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
    this.parent = options.parent;
    this.amount = options.amount;
    this.unit = options.unit;
  },
  removeIngredient: function(event){
    event.preventDefault();
    this.parent.removeSubview("#added-ingredients", this);
  },
  render: function(){
    var content = this.template({ingredient: this.model,
      amount: this.amount,
      unit: this.unit
    });
    this.$el.html(content);
    return this;
  }
});
