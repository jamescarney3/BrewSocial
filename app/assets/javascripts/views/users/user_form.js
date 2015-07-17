BrewSocial.Views.UsersForm = Backbone.View.extend({
  template: JST["users/form"],
  events: {
    "submit form":"submit"
  },
  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(this.model, "sync change", this.render);
  },
  submit: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    var thisView = this;

    this.model.set(formData);

    this.model.save({}, {
      success: function(){
        BrewSocial.currentUser.fetch();
        thisView.collection.add(thisView.model, {merge: true});
        thisView.remove();
        Backbone.history.navigate("", {trigger: true});
      },
      error: function(user, request){
        alert("Incomplete/invalid signup data!")
      }
    });
  },
  render: function(){
    this.$el.html(this.template({user: this.model}));
    return this;
  }

});
