/*global define*/

define([
    'backbone'
], function (Backbone) {
    'use strict';

    var activeView = null;

    var ApprouterRouter = Backbone.Router.extend({
        routes: {
            'viewA': 'showViewA',
            'viewB': 'showViewB',
            'viewC': 'showViewC'
        },

        _renderView: function(view) {

            if(activeView instanceof Backbone.View){
                activeView.remove();
            }

            activeView = null;

            activeView = view;

            console.log(view);
            activeView.render().$el.appendTo($('#content'));
        },

        showViewA: function(){
            var that = this;

            require(['collections/collectionA', 'views/moduleA/viewA'], function(Collection, View) {
                var myCollection = new Collection();

                that._renderView(new View({collection: myCollection}));
            });
        },

        showViewB: function(){

            var that = this;

            require(['collections/collectionB', 'views/moduleB/viewB'], function(Collection, View) {
                var myCollection = new Collection();

                that._renderView(new View({collection: myCollection}));
            });
        },

        showViewC: function(){

            var that = this;

            require(['models/modelA', 'views/moduleC/viewC'], function(Collection, View) {
                var myCollection = new Collection();

                that._renderView(new View({collection: myCollection}));
            });
        }

    });

    return ApprouterRouter;
});
