BrewSocial.Views.FeaturedRecipeShow = Backbone.CompositeView.extend({
  template: JST["recipes/show_featured"],
  tagName: "section",
  events: {
    "click #prev":"prevRecipe",
    "click #next":"nextRecipe"
  },
  initialize: function(){
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
    this.$featured = this.$el.find("#featured-recipes");
  },
  prevRecipe: function(){
    if(this.activeIdx > 0){
      this.activeIdx -= 1;
      this.$featured.css("left", -(this.activeIdx * 526) + "px");
    };
  },
  nextRecipe: function(){
    if(this.activeIdx < this.maxIdx){
      this.activeIdx += 1;
      this.$featured.css("left", -(this.activeIdx * 526) + "px");
    };
  },
  render: function(){
    var content = this.template({recipes: this.collection});
    this.$el.html(content);
    return this;
  }
});
