BrewSocial.Views.MultiSearchForm = Backbone.View.extend({
  template: JST["shared/multisearch_form"],
  events: {
    "click .search":"search"
  },

  search: function(event){
    event.preventDefault();

    var query = this.$("#search-field").val();

    if(query != ""){
      Backbone.history.navigate("search/" + query, {trigger: true});
    };
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  }

});
