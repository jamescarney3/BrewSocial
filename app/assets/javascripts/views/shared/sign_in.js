BrewSocial.Views.SignIn = Backbone.View.extend({
  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(BrewSocial.currentUser, "signIn", this.signInCallback);
  },
  className: "signin",
  events: {
    "submit form":"submit",
    "click #sign-in-as-guest-link": "signInAsGuest"
  },

  template: JST["shared/sign_in"],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  signInAsGuest: function(event){
    event.preventDefault();
    BrewSocial.currentUser.signIn({
      username: "Stannis",
      password: "password"
    });
    Backbone.history.navigate("", {trigger: true});
  },

  submit: function(event){
    event.preventDefault();
    var view = this;
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    BrewSocial.currentUser.signIn({
      username: formData.username,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination.")
      },
      success: function(){
        if(!view.signInCallback.bind(view));{
          Backbone.history.navigate("", {trigger: true});
        };
      }
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
      return true;
    } else {
      this.remove();
      return false;
    };
  }
});
