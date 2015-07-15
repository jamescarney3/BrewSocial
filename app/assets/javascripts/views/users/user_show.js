BrewSocial.Views.UserShow = Backbone.CompositeView.extend({
  template: _.template("<h1><%= user.escape('username') %></h1>"),
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },
  render: function(){
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  }

});
