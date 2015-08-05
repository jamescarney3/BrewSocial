BrewSocial.Views.Footer = Backbone.View.extend({
  template: JST['shared/footer'],
  initialize: function(options){
    this.render();
  },
  render: function(){
    var html = this.template();
    this.$el.html(html);
    return this;
  },
});
