BrewSocial.Views.AboutSplash = Backbone.View.extend({
  template: JST['shared/about_splash'],
  events: {
    "click #exit":"exit"
  },
  initialize: function(options){
    this.render();
    this.$el.addClass("group").addClass("open");
  },
  exit: function(event){
    event.preventDefault();
    this.resetStyling();
    this.$el.html("");
  },
  resetStyling: function(){
    this.$el.removeClass("group");
    this.$el.removeClass("open").addClass("closed");
  },
  render: function(){
    var html = this.template();
    this.$el.html(html);
    return this;
  },
});
