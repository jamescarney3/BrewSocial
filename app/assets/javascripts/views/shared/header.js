BrewSocial.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(BrewSocial.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "click #sign-in-link": "signIn",
    "click #sign-up-link": "signUp"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: BrewSocial.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function(event){
    event.preventDefault();
    BrewSocial.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  signIn: function(event){
    event.preventDefault();
    alert("sign in");
    Backbone.history.navigate("#/session/new", {trigger: true});
  },

  signUp: function(event){
    event.preventDefault();
    alert("sign up");
    Backbone.history.navigate("#/users/new", {trigger: true});
  }

});
