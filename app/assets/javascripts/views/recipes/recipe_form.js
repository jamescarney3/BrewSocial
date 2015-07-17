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
    var nameInput = this.$el.find("#ingredient-name");
    var addedIngredient = this.ingredients.get(nameInput.val());
    var amount = this.$el.find("#recipe-ingredient-amount").val();
    var unit = this.$el.find("#recipe-ingredient-unit").val();

    var addedIngredientView = new BrewSocial.Views.IngredientListItemShow({
      model: addedIngredient,
      amount: amount,
      unit: unit,
      parent: this
    });

    this.addSubview("#added-ingredients", addedIngredientView);
  },

  submit: function(event){
    event.preventDefault();
    var recipeAttrs = this.$el.serializeJSON().recipe;
    recipeAttrs.author_id = BrewSocial.currentUser.id;
    var ingredientIds = [];

    this.eachSubview(function(subview, selector){
      if (selector === "#added-ingredients"){
        ingredientIds.push({
          id: subview.model.id,
          amount: subview.amount,
          unit: subview.unit
        });
      };
    });

    var newRecipe = new BrewSocial.Models.Recipe(recipeAttrs);

    newRecipe.save({},{
      success: function(){
        alert("saved!")
      },
      error: function(){
        alert("failed!")
      }
    })

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
