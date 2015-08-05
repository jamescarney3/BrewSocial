BrewSocial.Views.Footer = Backbone.View.extend({
  template: JST['shared/footer'],
  events: {
    "click #about":"aboutSplash"
  },
  initialize: function(options){
    this.render();
  },
  aboutSplash: function(event){
    event.preventDefault();
    var aboutSplash = new BrewSocial.Views.AboutSplash({el: "#splash"});
  },
  render: function(){
    var html = this.template();
    this.$el.html(html);
    return this;
  },
});
