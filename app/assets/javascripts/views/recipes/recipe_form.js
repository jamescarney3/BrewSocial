BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit",
    "click .add-ingredient":"addIngredient"
  },
  initialize: function(options){
    this.ingredients = options.ingredients;
    this.ingredients.fetch();
    this.listenToOnce(this.model, "sync", function(){
      this.render();
      this.syncIngredients();
      });
  },

  syncIngredients: function(){
    var view = this;
    this.model.recipeIngredients().forEach(function(recIng){
      var subView = new BrewSocial.Views.IngredientRecipeFormShow({
        model: recIng,
        parent: view
      });
      view.addSubview("#added-ingredients", subView);
    });
  },

  addIngredient: function(event){
    event.preventDefault();
    var view = this;

    var ingredient_id = this.$el.find("#ingredient-name").val();
    var ingredient_name = this.ingredients.get(ingredient_id).get("name");
    var amount = this.$el.find("#recipe-ingredient-amount").val();
    var unit = this.$el.find("#recipe-ingredient-unit").val();

    var recIng = new BrewSocial.Models.RecipeIngredient({
      ingredient_id: ingredient_id,
      ingredient_name: ingredient_name,
      amount: amount,
      unit: unit
    });

    var subView = new BrewSocial.Views.IngredientRecipeFormShow({
      model: recIng,
      parent: view,
      recipe: this.model
    });

    this.addSubview("#added-ingredients", subView);
  },

  submit: function(event){
    event.preventDefault();

    var view = this;
    var recipe = this.model;

    var recipeAttrs = this.$el.serializeJSON().recipe;
    recipeAttrs.author_id = BrewSocial.currentUser.id;
    this.model.set(recipeAttrs);

    recipe.save({}, {
      success: function(){
        recipe.trigger("recipeSave");
        Backbone.history.navigate("recipes/" + recipe.id, {trigger: true});
      }
    });
  },

  render: function(){
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
