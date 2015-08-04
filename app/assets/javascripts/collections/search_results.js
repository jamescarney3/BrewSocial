BrewSocial.Collections.SearchResults = Backbone.Collection.extend({

	url: "/api/multisearch",

	parse: function (resp) {
		if (resp.total_count) {
			this.total_count = resp.total_count;
      delete resp.total_count;
		}

		return resp.results;
	},

	search: function(query, page){
		var method = "GET";
    var collection = this;
    var resp = $.ajax({
      url: ("/api/multisearch/" + query + "/" + page),
      type: method,
      processData: false,
      contentType: false,
      success: function(resp){
        collection.set(resp, {parse: true});
      }
    });
	},

	parse: function (resp) {
		if (resp.total_count) {
			this.totalCount = resp.total_count;

		}

		return resp.search_results;
	},

	model: function (attrs) {
		var type = attrs._type;
		delete attrs._type;

		// return new BrewSocial.Models[type](attrs);
    // ^^ cooler way to do this vv

		if (type === "User") {
			return new BrewSocial.Models.User(attrs);
		} else if (type === "Recipe") {
			return new BrewSocial.Models.Recipe(attrs);
		};
	}

});
