BrewSocial.Views.Welcome = Backbone.CompositeView.extend({
  template: JST["shared/welcome"],
  initialize: function(options){
    this.loadFeatured();
  },
  loadFeatured: function(){
    var recipes = new BrewSocial.Collections.Recipes();
    recipes.grabRandom(3);
    var featuredRecipeShow = new BrewSocial.Views.FeaturedRecipeShow({collection: recipes});
    this.addSubview("#featured-recipe", featuredRecipeShow);
  },
  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
