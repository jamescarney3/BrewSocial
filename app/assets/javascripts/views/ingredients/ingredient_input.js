BrewSocial.Views.IngredientInput = Backbone.CompositeView.extend({
  template: JST["ingredients/input"],
  tagName: "li",
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function(){
    this.collection.forEach(function(el){
      console.log(el.get("name"));
    });
    console.log(this.collection.length);
    var content = this.template({ingredients: this.collection});
    this.$el.html(content);
    return this;
  }
});
