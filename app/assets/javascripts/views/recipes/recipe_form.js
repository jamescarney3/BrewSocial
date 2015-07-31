BrewSocial.Views.RecipeForm = Backbone.CompositeView.extend({
  template: JST["recipes/form"],
  tagName: "form",
  events: {
    "click #recipe-submit":"submit",
    "click #add-ingredient":"addIngredient",
    "change #input-recipe-image":"fileInputChange"
  },
  initialize: function(options){
    this.$el.addClass("group");
    this.ingredients = options.ingredients || new BrewSocial.Collections.Ingredients();
    this.ingredients.fetch();
    this.listenToOnce(this.model, "sync", function(){
      this.render();
      this.syncIngredients();
    });
  },

  syncIngredients: function(){
    var view = this;
    this.model.recipeIngredients().forEach(function(recIng){
      var subView = new BrewSocial.Views.IngredientRecipeFormShow({
        model: recIng,
        parent: view
      });
      view.addSubview("#added-ingredients", subView);
    });
  },

  addIngredient: function(event){
    event.preventDefault();

    var view = this;

    var ingredient_id = this.$el.find("#ingredient-name").val();
    var ingredient_name = this.ingredients.get(ingredient_id).get("name");
    var amount = this.$el.find("#recipe-ingredient-amount").val();
    var unit = this.$el.find("#recipe-ingredient-unit").val();

    var recIng = new BrewSocial.Models.RecipeIngredient({
      ingredient_id: ingredient_id,
      ingredient_name: ingredient_name,
      amount: amount,
      unit: unit
    });

    var subView = new BrewSocial.Views.IngredientRecipeFormShow({
      model: recIng,
      parent: view,
      recipe: this.model
    });

    this.addSubview("#added-ingredients", subView);
  },

  fileInputChange: function(event){
    var view = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      view._updatePreview(reader.result);
    };

    if(file){
      reader.readAsDataURL(file);
    }else{
      view._updatePreview("");
    };
  },

  _updatePreview: function(src){
    this.$el.find("#preview-recipe-image").attr("src", src);
  },

  submit: function(event){
    event.preventDefault();

    var title = this.$("#input-recipe-title").val();
    var style = this.$("#input-recipe-style").val();
    var procedure = this.$("#input-recipe-procedure").val();
    var image = this.$("#input-recipe-image")[0].files[0];
    var is_private = this.$("#input-recipe-is-private").val();
    var author_id = BrewSocial.currentUser.id;

    var formData = new FormData({multipart: true});
    formData.append("recipe[title]", title);
    formData.append("recipe[style]", style);
    formData.append("recipe[procedure]", procedure);
    formData.append("recipe[is_private]", is_private);
    formData.append("recipe[author_id]", author_id);
    if(image){
      formData.append("recipe[image]", image);
    };

    var model = this.model;

    this.model.saveFormData(formData, {}, function(resp){
      model.set(resp);
      model.trigger("recipeSave");
      Backbone.history.navigate("#/recipes/" + model.id, {trigger: true});
    });
  },

  render: function(){
    var content = this.template({recipe: this.model});
    this.$el.html(content);

    if (!this.newIngredientView) {
      this.newIngredientView = new BrewSocial.Views.IngredientInput({ collection: this.ingredients });
      this.addSubview("#ingredient-to-add", this.newIngredientView);
    };

    this.attachSubviews();

    return this;
  }
});
