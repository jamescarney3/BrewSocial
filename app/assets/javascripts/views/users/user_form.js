BrewSocial.Views.UsersForm = Backbone.View.extend({
  template: JST["users/form"],
  events: {
    "submit form":"submit",
    "change #input-user-avatar":"fileInputChange"
  },

  initialize: function(options){
    // this.listenTo(this.model, "sync change", this.render);
  },

  submit: function(event){
    event.preventDefault();


    var username = this.$("#input-user-username").val();
    var password = this.$("#input-user-password").val();
    var avatar = this.$("#input-user-avatar")[0].files[0] || BrewSocial.missingImage;

    var formData = new FormData();
    formData.append("user[username]", username);
    formData.append("user[password]", password);
    formData.append("user[avatar]", avatar);

    var credentials = {username: username, password: password};
    var view = this;
    var model = this.model;

    this.model.saveFormData(formData, {
      credentials: credentials,
      error: function(user, request){
        alert("Incomplete/invalid signup data!");
      }
    });

    // var $form = $(event.currentTarget);
    // var formData = $form.serializeJSON().user;

    // var thisView = this;

    // this.model.set(formData);

    // this.model.save({}, {
    //   success: function(){
    //     BrewSocial.currentUser.fetch();
    //     thisView.collection.add(thisView.model, {merge: true});
    //     thisView.remove();
    //     Backbone.history.navigate("", {trigger: true});
    //   },
    //   error: function(user, request){
    //     alert("Incomplete/invalid signup data!")
    //   }
    // });
  },

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var view = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      view._updatePreview(reader.result);
    };

    if(file){
      reader.readAsDataURL(file);
    }else{
      view._updatePreview("");
    };
  },

  _updatePreview: function(src){
    this.$el.find("#preview-user-avatar").attr("src", src);
  },


  render: function(){
    this.$el.html(this.template({user: this.model}));
    return this;
  }

});
