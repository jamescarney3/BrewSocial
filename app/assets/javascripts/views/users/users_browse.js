BrewSocial.Views.UsersBrowse = Backbone.CompositeView.extend({
  template: JST["users/browse"],
  events: {
    "submit #user-search-form":"updateQuery"
  },
  initialize: function(options){
    this.query = "default";
    this.syncResults();
    this.render();
  },
  syncResults: function(){
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
    this.query = this.$el.find("#user-search-field").val();
    this.syncResults();
  },
  render: function(){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
