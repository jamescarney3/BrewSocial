BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit"
  },
  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
    this.ingredients = options.ingredients;
  },
  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    console.log(attrs.recipe);
  },
  render: function(){
    this.ingredients.fetch();
    var content = this.template({recipe: this.model});
    this.$el.html(content);
    // var sub = new BrewSocial.Views.IngredientInput({collection: this.ingredients});
    // this.$el.append(sub.render().$el);
    this.addSubview("#ingredients", new BrewSocial.Views.IngredientInput({collection: this.ingredients}));
    console.log(this._subviews);
    debugger;
    this.attachSubviews();
    return this;
  }
});
