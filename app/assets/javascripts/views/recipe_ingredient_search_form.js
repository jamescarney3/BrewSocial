BrewSocial.Views.RecipeIngredientSearchForm = Backbone.View.extend({
  template: JST["shared/recipe_ingredient_search_form"],
  render: function(){
    this.$el.html(this.template());
    return this;
  }

});
