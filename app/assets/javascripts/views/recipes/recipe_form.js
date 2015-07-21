BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit",
    "click .add-ingredient":"addIngredient"
  },
  initialize: function(options){
    this.ingredients = options.ingredients;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "sync", this.syncIngredients);
  },

  addIngredient: function(event){
    event.preventDefault();
    var nameInput = this.$el.find("#ingredient-name");
    var addedIngredient = this.ingredients.get(nameInput.val());
    var amount = this.$el.find("#recipe-ingredient-amount").val();
    var unit = this.$el.find("#recipe-ingredient-unit").val();

    this.appendIngredient(addedIngredient, amount, unit);
  },

  syncIngredients: function(){
    var view = this;
    this.model.recipeIngredients().forEach(function(recIng){
      var ingredient = this.ingredients.getOrFetch(recIng.get("ingredient_id"));
      this.appendIngredient(
        ingredient, recIng.get("amount"), recIng.get("unit")
      );
    }.bind(this));
  },

  submit: function(event){
    event.preventDefault();

    debugger;

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
        Backbone.history.navigate(("recipes/" + recipe.id), {trigger: true})
      },
      error: function(){
        alert("failed!")
      }
    })
  },

  appendIngredient: function(ingredient, amount, unit){
    var addedIngredientView = new BrewSocial.Views.IngredientListItemShow({
      model: ingredient,
      collection: this.ingredients,
      amount: amount,
      unit: unit,
      parent: this
    });

    this.addSubview("#added-ingredients", addedIngredientView);
  },

  render: function(){
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
