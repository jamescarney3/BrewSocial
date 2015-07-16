BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit",
    "click .add-ingredient":"addIngredient",

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
    this.ingredientList.push(addedIngredient);

    var newListItemView = new BrewSocial.Views.IngredientListItemShow({
      model: addedIngredient
    });

    this.addSubview("#added-ingredients", newListItemView);
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
