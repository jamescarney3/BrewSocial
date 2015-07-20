BrewSocial.Views.IngredientListItemShow = Backbone.CompositeView.extend({
  template: JST["ingredients/list_item_show"],
  tagName: "li",
  events: {
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.ingredient = this.collection.getOrFetch(this.model.get("ingredient_id"));
    this.listenTo(this.ingredient, "sync", this.render);
    this.parent = options.parent;
  },
  removeIngredient: function(event){
    event.preventDefault();
    this.parent.removeSubview("#added-ingredients", this);
  },
  render: function(){
    console.log("list item rendering for model id " + this.model.id);
    var content = this.template({
      recipeIngredient: this.model,
      ingredient: this.ingredient
    });
    this.$el.html(content);
    return this;
  }
});
