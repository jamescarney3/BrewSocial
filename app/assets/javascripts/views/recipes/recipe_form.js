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
    this.syncIngredients;
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
    var ingredientsAttrs = [];

    this.eachSubview(function(subview, selector){
      if (selector === "#added-ingredients"){
        ingredientsAttrs.push({
          ingredient_id: subview.model.id,
          amount: subview.amount,
          unit: subview.unit
        });
      };
    });

    this.model.set(recipeAttrs);
    var recipe = this.model;

    recipe.save({},{
      success: function(){
        ingredientsAttrs.forEach(function(attrs){
          attrs.recipe_id = recipe.id;
          var recipeIngredient = new BrewSocial.Models.RecipeIngredient(attrs);
          recipeIngredient.save();
        });
        // Line 59 is executing before the last recipe ingredient association is
        // saved, so the show page is missing the last recipe ingredient
        Backbone.history.navigate(("recipes/" + recipe.id), {trigger: true})
      },
      error: function(){
        alert("failed!")
      }
    })
  },

  render: function(){
    console.log("form rendering");
    this.ingredients.fetch();
    var content = this.template({recipe: this.model});
    this.$el.html(content);

    if (!this.newIngredientView) {
      this.newIngredientView = new BrewSocial.Views.IngredientInput({
        collection: this.ingredients
      });
      this.addSubview("#ingredient-to-add", this.newIngredientView);
    };

    this.attachSubviews();
    return this;
  }
});
