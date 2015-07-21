BrewSocial.Views.RecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show"],
  events: {
    "click .delete-recipe":"recipeDelete",
    "click .edit-recipe":"recipeEdit",
    "click .add-recipe":"recipeAdd"
  },
  initialize: function(options){
    this.ingredients = options.ingredients;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "sync", this.syncIngredients);
  },
  recipeDelete: function(event){
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  },
  recipeEdit: function(event){
    event.preventDefault();
    Backbone.history.navigate("recipes/" + this.model.id + "/edit", {trigger: true});
  },
  recipeAdd: function(event){
    event.preventDefault();
    var view = this;
    BrewSocial.currentUser.addRecipe(this.model, function(){
      view.model.users().add(BrewSocial.currentUser);
      view.render();
    });
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
  appendIngredient: function(ingredient, amount, unit){
    var addedIngredientView = new BrewSocial.Views.ListIngredientShow({
      model: ingredient,
      collection: this.ingredients,
      amount: amount,
      unit: unit,
      parent: this
    });

    this.addSubview("#ingredients", addedIngredientView);
  },
  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
