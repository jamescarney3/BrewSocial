BrewSocial.Views.Welcome = Backbone.CompositeView.extend({
  template: JST["shared/welcome"],
  initialize: function(options){
    this.ingredients = options.ingredients;
    this.recipes = options.recipes;
    this.recipes.fetch();
    this.listenTo(options.recipes, "sync", this.render);
    this.listenTo(this.ingredients, "sync", this.loadFeature);
    debugger;
  },
  loadFeature: function(){
    var featuredRecipe = this.recipes.sample();
    var view = this;
    featuredRecipe.fetch({
      success: function(){
        var featuredRecipeShow = new BrewSocial.Views.FeaturedRecipeShow({
          model: featuredRecipe,
          ingredients: view.ingredients
        });
        view.addSubview("#featured-recipe", featuredRecipeShow);
      }
    });
  },
  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
