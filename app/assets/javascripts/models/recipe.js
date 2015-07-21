BrewSocial.Models.Recipe = Backbone.Model.extend({
  urlRoot: "/api/recipes",

  addIngredient: function(ingredient, amount, unit, callback){
    var join = new BrewSocial.Models.RecipeIngredient({
      recipe_id: this.id,
      ingredient_id: ingredient.id,
      amount: amount,
      unit: unit,
    });
    join.save({},{
      success: callback
    });
  },

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
    if(response.ingredient_list){
      this._ingredientList = response.ingredient_list;
      delete response.ingredient_list;
    };
    return response;
  }
});
