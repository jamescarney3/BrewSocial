BrewSocial.Views.Welcome = Backbone.CompositeView.extend({
  template: JST["shared/welcome"],
  initialize: function(options){
    // this.listenTo(BrewSocial.currentUser, "signIn", this.signInCallback);
    this.recipes = options.recipes;
    this.recipes.fetch();
    this.listenTo(options.recipes, "sync", this.loadFeature);
    this.listenTo(options.recipes, "sync", this.render);
  },
  loadFeature: function(){
    var featuredRecipe = this.recipes.sample();
    var featuredRecipeShow = new BrewSocial.Views.FeaturedRecipeShow({
      model: featuredRecipe
    });

    this.addSubview("#featured-recipe", featuredRecipeShow);
  },
  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
