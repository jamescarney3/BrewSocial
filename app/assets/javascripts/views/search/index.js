BrewSocial.Views.SearchResultsIndex = Backbone.CompositeView.extend({
  template: JST["search/index"],
  className: "search-results group",
  events: {
    "click #prev":"previousPage",
    "click #next":"nextPage"
  },

  initialize: function(options){
    this.query = options.query;
    this.searchType = options.searchType;
    this.page = 1;
    this.collection.search(this.searchType, this.query, this.page);
    this.collection.pageNum = this.page;
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

  previousPage: function(event){
    event.preventDefault();
    var view = this;
    this.page -= 1;
    this.collection.pageNum = this.page;
    this.resetSubviews();
    this.collection.search(this.searchType, this.query, this.page);
  },

  nextPage: function(event){
    event.preventDefault();
    var view = this;
    this.page += 1;
    this.collection.pageNum = this.page;
    this.resetSubviews();
    this.collection.search(this.searchType, this.query, this.page);
  },

  render: function(){
    var content = this.template({results: this.collection, query: this.query});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
