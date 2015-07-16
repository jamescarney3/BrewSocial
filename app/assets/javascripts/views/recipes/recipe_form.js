BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit",
    "click .add-ingredient":"addIngredient"
  },
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
    this.ingredients = options.ingredients;
  },

  addIngredient: function(event){
    event.preventDefault();
    var input = this.$el.find("#ingredient-name");
    var addedIngredient = this.ingredients.get(input.val());

    var addedIngredientView = new BrewSocial.Views.IngredientListItemShow({
      model: addedIngredient,
      parent: this
    });

    this.addSubview("#added-ingredients", addedIngredientView);
  },

  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    // var ingredientIds =
    debugger;
  },

  render: function(){
    this.ingredients.fetch();
    var content = this.template({recipe: this.model});
    this.$el.html(content);

    var newIngredientView = new BrewSocial.Views.IngredientInput({
      collection: this.ingredients
    });
    this.addSubview("#ingredient-to-add", newIngredientView);

    this.attachSubviews();
    return this;
  }
});
