BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit",
    "click .add-ingredient":"addIngredient",
    "click .remove-ingredient":"removeIngredient"
  },
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
    this.ingredients = options.ingredients;
    this.ingredientList = [];
  },

  addIngredient: function(event){
    event.preventDefault();
    var input = this.$el.find("#ingredient-name");
    var addedIngredient = this.ingredients.get(input.val());

    var newListItemView = new BrewSocial.Views.IngredientListItemShow({
      model: addedIngredient,
      subListIndex: this.ingredientList.length
    });

    this.addSubview("#added-ingredients", newListItemView);

    this.ingredientList.push(addedIngredient);
  },

  removeIngredient: function(event){
    event.preventDefault();
    // alert($(event.currentTarget).data("sub-list-index"));
    var idx = $(event.currentTarget).data("sub-list-index");
    this.ingredientList.splice(idx, 1);
    this.subviews("#added-ingredients")._wrapped[idx].remove();
  },

  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    debugger;
  },

  render: function(){
    this.ingredients.fetch();
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    this.addSubview("#ingredient-to-add", new BrewSocial.Views.IngredientInput({collection: this.ingredients}));
    this.attachSubviews();
    return this;
  }
});
