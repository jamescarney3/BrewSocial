BrewSocial.Models.Recipe = Backbone.Model.extend({
  urlRoot: "/api/recipes",

  toJSON: function(){
    return { recipe: _.clone(this.attributes) }
  }
});
