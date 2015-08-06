BrewSocial.Views.IngredientRecipeFormShow = Backbone.CompositeView.extend({
  template: JST["ingredients/recipe_form_show"],
  tagName: "li",
  className: "group",
  events: {
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.parent = options.parent;
    this.listenTo(this.model, "sync", this.render);
    this.recipe = options.recipe;
    this.listenTo(this.recipe, "recipeSave", this.saveRecipeIngredient);
  },
  removeIngredient: function(event){
    event.preventDefault();
    this.model.destroy();
    this.parent.removeSubview("#added-ingredients", this);
  },
  saveRecipeIngredient: function(){
    if(this.model.isNew()){
      this.model.set({recipe_id: this.recipe.id});
      this.recipe.recipeIngredients().add(this.model);
      this.model.save();
    };
  },
  render: function(){
    var content = this.template({ recipeIngredient: this.model });
    this.$el.html(content);
    return this;
  }
});
