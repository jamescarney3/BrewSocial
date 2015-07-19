BrewSocial.Models.Recipe = Backbone.Model.extend({
  urlRoot: "/api/recipes",

  toJSON: function(){
    return { recipe: _.clone(this.attributes) }
  },

  ingredientList: function(){
    if (!this._ingredientList){
      this._ingredientList = {};
    };
    return this._ingredientList;
  },

  parse: function(response){
    debugger;
    if(response.ingredient_list){
      this._ingredientList = response.ingredient_list;
      delete response.ingredient_list;
    };
    return response;
  }
});
