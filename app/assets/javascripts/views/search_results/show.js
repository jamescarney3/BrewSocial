BrewSocial.Views.SearchResultShow = Backbone.CompositeView.extend({
  template: JST["search_results/show"],
  render: function(){
    var content = this.template({result: this.model});
    this.$el.html(content);
    return this;
  }
});
