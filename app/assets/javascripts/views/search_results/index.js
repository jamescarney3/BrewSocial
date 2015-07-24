BrewSocial.Views.SearchResultsIndex = Backbone.CompositeView.extend({
  template: JST["search_results/index"],
  initialize: function(options){
    this.query = options.query;
    this.collection.fetch({ data: { query: this.query }});
    this.listenTo(this.collection, "sync", function(){
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
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
