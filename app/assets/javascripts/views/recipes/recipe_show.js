BrewSocial.Views.RecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show"],
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
  },
  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    return this;
  }

});
