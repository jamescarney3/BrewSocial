BrewSocial.Views.Welcome = Backbone.CompositeView.extend({
  template: JST["shared/welcome"],
  initialize: function(options){
    this.loadFeatured();
    this.listenTo(BrewSocial.currentUser, "signIn signOut", this.updateProfileLink);
  },
  loadFeatured: function(){
    var recipes = new BrewSocial.Collections.Recipes();
    recipes.grabRandom(3);
    var featuredRecipeShow = new BrewSocial.Views.FeaturedRecipeShow({collection: recipes});
    this.addSubview("#featured-recipe", featuredRecipeShow);
  },
  updateProfileLink: function(){
    if(BrewSocial.currentUser.id){
      this.$("#profile-link").attr("href", "#/users/" + BrewSocial.currentUser.id);
    }else{
      this.$("#profile-link").attr("href", "#/session/new");
    };
  },
  render: function(){
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
