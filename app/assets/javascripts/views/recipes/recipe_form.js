BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit"
  },
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },
  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    console.log(attrs.recipe);
  },
  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    return this;
  }
});
