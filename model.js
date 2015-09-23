
var TextModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    urlRoot: '/texts',
    //fetch: function() {},
    //save: function() {},
    initialize : function () {
        this.fetch();
    },    
    replace : function (str) {
        this.set("value", str);
        this.save();
    }
});


/*
var TextCollection = Backbone.Collection.extend({
    model : TextModel,
    url : "/texts",
    initialize: function () {
        this.fetch();
    }
});

var textCollection = new TextCollection();
*/
