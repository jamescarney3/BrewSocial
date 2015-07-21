BrewSocial.Views.FormIngredientShow = Backbone.CompositeView.extend({
  template: JST["ingredients/form_ingredient_show"],
  tagName: "li",
  events: {
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.amount = options.amount;
    this.unit = options.unit;
    this.parent = options.parent;
    this.listenTo(this.model, "sync", this.render);
  },
  removeIngredient: function(event){
    event.preventDefault();
    this.parent.removeSubview("#added-ingredients", this);
  },
  render: function(){
    var content = this.template({
      ingredient: this.model,
      amount: this.amount,
      unit: this.unit
    });
    this.$el.html(content);
    return this;
  }
});
