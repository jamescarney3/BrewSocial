BrewSocial.Views.FeaturedRecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show_featured"],

  initialize: function(options){
    this.recipe = new BrewSocial.Models.Recipe();
    this.recipes = options.recipes;
    this.ingredients = options.ingredients;
    this.pickRecipe();
  },
  pickRecipe: function(){
    var view = this;
    view.recipes.fetch({
      success: function(){
        view.recipe = view.recipes.sample();
        view.recipe.fetch({
          success: function(){
            view.render();
          }
        });
      }
    });
  },
  render: function(){
    var content = this.template({recipe: this.recipe, ingredients: this.ingredients});
    this.$el.html(content);
    return this;
  }
});
