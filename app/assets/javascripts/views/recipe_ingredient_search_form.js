BrewSocial.Views.RecipeIngredientSearchForm = Backbone.View.extend({
  template: JST["shared/recipe_ingredient_search_form"],
  events: {
    "click .search":"search"
  },
  search: function(event){
    event.preventDefault();

    var query = this.$("#search-field").val();

    if(query != ""){
      Backbone.history.navigate("#/recipes/search_by_ingredients/" + query, {trigger: true});
    };
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }

});
