BrewSocial.Views.UsersBrowse = Backbone.CompositeView.extend({
  template: JST["search/users/browse"],
  className: "browse group",
  events: {
    "submit #user-search-form":"updateQuery"
  },

  initialize: function(options){
    this.query = "default";
    this.render();
  },

  executeSearch: function(){
    this.resultsSubView = new BrewSocial.Views.SearchResultsIndex({
      searchType: null,
      query: this.query,
      collection: this.collection
      });
    this.addSubview("#results", this.resultsSubView);
  },

  updateQuery: function(event){
    event.preventDefault();
    this.resultsSubView && this.removeSubview("#results", this.resultsSubView);
    this.query = this.$("#user-search-field").val();
    this.executeSearch();
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
