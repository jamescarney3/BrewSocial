BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click .recipe-submit":"submit",
    "click .add-ingredient":"addIngredient"
  },
  initialize: function(options){
    this.ingredients = options.ingredients;
    this.syncIngredients();
    this.listenTo(this.model, "sync", this.render);
  },

  addIngredient: function(event){
    event.preventDefault();
    var nameInput = this.$el.find("#ingredient-name");
    var addedIngredient = this.ingredients.get(nameInput.val());
    var amount = this.$el.find("#recipe-ingredient-amount").val();
    var unit = this.$el.find("#recipe-ingredient-unit").val();

    this.appendIngredient(addedIngredient, amount, unit);
  },

  syncIngredients: function(){
    this.recipeIngredients = new BrewSocial.Collections.RecipeIngredients;
    var that = this;
    this.recipeIngredients.fetch({
      data: {recipe_id: this.model.id},
      success: function(){
        that.recipeIngredients.forEach(function(recIng){
          var amount = recIng.attributes.amount;
          var unit = recIng.attributes.unit;
          that.appendIngredient(recIng, amount, unit);
        });
      }
    });



    // this.model.ingredientList().forEach(function(el){
    //   var addedIngredient = ingredients.get(el.ingredient_id);
    //   var amount = el.amount;
    //   var unit = el.unit;
    //
    //   this.appendIngredient(addedIngredient, amount, unit);
    // }.bind(this));
  },

  submit: function(event){
    event.preventDefault();
    var recipeAttrs = this.$el.serializeJSON().recipe;
    recipeAttrs.author_id = BrewSocial.currentUser.id;
    var ingredientsAttrs = [];

    this.eachSubview(function(subview, selector){
      if (selector === "#added-ingredients"){
        ingredientsAttrs.push({
          ingredient_id: subview.model.id,
          amount: subview.amount,
          unit: subview.unit
        });
      };
    });

    this.model.set(recipeAttrs);
    var recipe = this.model;

    recipe.save({},{
      success: function(){
        ingredientsAttrs.forEach(function(attrs){
          attrs.recipe_id = recipe.id;
          var recipeIngredient = new BrewSocial.Models.RecipeIngredient(attrs);
          recipeIngredient.save();
        });
        Backbone.history.navigate(("recipes/" + recipe.id), {trigger: true})
      },
      error: function(){
        alert("failed!")
      }
    })
  },

  appendIngredient: function(ingredient, amount, unit){
    var addedIngredientView = new BrewSocial.Views.IngredientListItemShow({
      model: ingredient,
      collection: this.ingredients,
      amount: amount,
      unit: unit,
      parent: this
    });

    this.addSubview("#added-ingredients", addedIngredientView);
  },

  render: function(){
    this.ingredients.fetch();
    var content = this.template({recipe: this.model});
    this.$el.html(content);

    if (!this.newIngredientView) {
      this.newIngredientView = new BrewSocial.Views.IngredientInput({
        collection: this.ingredients
      });
      this.addSubview("#ingredient-to-add", this.newIngredientView);
    };

    this.attachSubviews();
    return this;
  }
});
