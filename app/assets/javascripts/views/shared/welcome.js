BrewSocial.Views.Welcome = Backbone.CompositeView.extend({
  template: JST["shared/welcome"],
  initialize: function(options){
    this.ingredients = options.ingredients;
    this.recipes = options.recipes;
    this.loadFeatured();
  },
  loadFeatured: function(){
    var featuredRecipeShow = new BrewSocial.Views.FeaturedRecipeShow({
      recipes: this.recipes,
      ingredients: this.ingredients
    });
    this.addSubview("#featured-recipe", featuredRecipeShow);
  },
  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
