BrewSocial.Views.RecipesBrowse = Backbone.CompositeView.extend({
  template: JST["search/recipes/browse"],

  events: {
    "submit #recipe-search-form":"updateQuery"
  },

  initialize: function(options){
    this.query = "default";
    this.render();
  },

  executeSearch: function(){
    this.resultsSubView = new BrewSocial.Views.SearchResultsIndex({
      searchType: this.searchType,
      query: this.query,
      collection: this.collection
      });
    this.addSubview("#results", this.resultsSubView);
  },

  updateQuery: function(event){
    event.preventDefault();
    this.query = this.$("#recipe-search-field").val();
    if(this.query == ""){ return; };
    this.searchType = this.$("#recipe-search-form :checked").val();
    debugger;
    this.resultsSubView && this.removeSubview("#results", this.resultsSubView);
    this.executeSearch();
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
