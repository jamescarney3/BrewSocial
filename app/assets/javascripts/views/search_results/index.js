BrewSocial.Views.SearchResultsIndex = Backbone.CompositeView.extend({
  template: JST["search_results/index"],
  initialize: function(options){
    this.query = options.query;
    this.searchType = options.searchType;
    this.page = options.page;
    this.collection.search(this.searchType, this.query, this.page);
    this.listenTo(this.collection, "update", function(){
      this.syncResults();
      this.render();
    });
  },

  syncResults: function(){
    var view = this;
    this.collection.forEach(function(result){
      var subView = new BrewSocial.Views.SearchResultShow({
        model: result
      });
      view.addSubview(".result-list", subView);
    });
  },

  render: function(){
    debugger;
    var content = this.template({results: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
