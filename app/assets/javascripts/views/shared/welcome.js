BrewSocial.Views.Welcome = Backbone.View.extend({
  template: JST["shared/welcome"],
  initialize: function(){
    // this.listenTo(BrewSocial.currentUser, "signIn", this.signInCallback);
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
