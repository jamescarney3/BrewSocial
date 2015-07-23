// BrewSocial.Views.FeaturedRecipeShow = Backbone.CompositeView.extend({
//   template: JST["recipes/featured_recipe_show"],
//   initialize: function(options){
//     this.ingredients = options.ingredients;
//     this.listenTo(this.model, "sync", this.render);
//     this.syncIngredients();
//   },
//   syncIngredients: function(){
//     var view = this;
//     debugger;
//     this.model.recipeIngredients().forEach(function(recIng){
//       var ingredient = this.ingredients.getOrFetch(recIng.get("ingredient_id"));
//       this.appendIngredient(
//         ingredient, recIng.get("amount"), recIng.get("unit")
//       );
//     }.bind(this));
//   },
//   appendIngredient: function(ingredient, amount, unit){
//     var addedIngredientView = new BrewSocial.Views.ListIngredientShow({
//       model: ingredient,
//       collection: this.ingredients,
//       amount: amount,
//       unit: unit,
//       parent: this
//     });
//
//     this.addSubview("#ingredients", addedIngredientView);
//   },
//   render: function(){
//     this.$el.html(this.template({recipe: this.model}));
//     return this;
//   }
// });
