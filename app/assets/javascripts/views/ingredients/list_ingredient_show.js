BrewSocial.Views.ListIngredientShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_ingredient_show"],
  tagName: "li",
  initialize: function(options){
    this.amount = options.amount;
    this.unit = options.unit;
    this.parent = options.parent;
    this.listenTo(this.model, "sync", this.render);
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
