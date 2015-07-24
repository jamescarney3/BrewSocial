BrewSocial.Views.Welcome = Backbone.CompositeView.extend({
  template: JST["shared/welcome"],
  initialize: function(options){
    this.$el.addClass("splash");
    this.ingredients = options.ingredients;
    this.recipes = options.recipes;
    this.loadFeatured();
    this.loadMultiSearch();
    this.loadRecipeIngredientSearch();
  },
  loadFeatured: function(){
    var featuredRecipeShow = new BrewSocial.Views.FeaturedRecipeShow({
      recipes: this.recipes,
      ingredients: this.ingredients
    });
    this.addSubview("#featured-recipe", featuredRecipeShow);
  },
  loadMultiSearch: function(){
    var multiSearchForm = new BrewSocial.Views.MultiSearchForm();
    this.addSubview("#search-recipe-user", multiSearchForm);
  },
  loadRecipeIngredientSearch: function(){
    var recipeIngredientSearchForm = new BrewSocial.Views.RecipeIngredientSearchForm();
    this.addSubview("#search-recipe-by-ingredient", recipeIngredientSearchForm);
  },
  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
