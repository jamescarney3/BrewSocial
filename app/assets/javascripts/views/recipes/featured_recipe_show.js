BrewSocial.Views.FeaturedRecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show_featured"],
  tagName: "section",
  events: {
    "click #prev":"prevRecipe",
    "click #next":"nextRecipe"
  },
  initialize: function(){
    // View methods to be reinstated when page is styled
    this.listenTo(this.collection, "update", function(){
      this.render();
      this.maxIdx = this.collection.length - 1;
      this.setup();
      }
    );
    this.$el.addClass("featured-recipe-carousel group");
    this.activeIdx = 0;
  },
  setup: function(){
    // this.$wrapper = this.$el.find("#featured-recipe-wrapper");
    // this.$container = this.$wrapper.find("#featured-recipe-container");
    // this.$container.css("width", this.$wrapper.width() * this.collection.length);
  },
  prevRecipe: function(){
    // if(this.activeIdx > 0){
    //   this.activeIdx -= 1;
    //   this.$container.css("left", -(this.$wrapper.width() * this.activeIdx) + "px");
    // };
  },
  nextRecipe: function(){
    // if(this.activeIdx < this.maxIdx){
    //   this.activeIdx += 1;
    //   this.$container.css("left", -(this.$wrapper.width() * this.activeIdx) + "px");
    // };
  },
  render: function(){
    debugger;
    var content = this.template({recipes: this.collection});
    this.$el.html(content);
    return this;
  }
});
