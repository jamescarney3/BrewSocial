BrewSocial.Views.RecipeForm = Backbone.View.extend({
  template: _.template("<h1>Actually make a form template, dummy.</h1>"),
  tagName: "form",
  events: {
    "click .recipe-submit":"submit"
  },
  initialize: function()
});
