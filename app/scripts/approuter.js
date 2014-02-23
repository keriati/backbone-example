/*global define*/

define([
    'backbone',

    'collections/collectionA',
    'views/moduleA/viewA',

    'collections/collectionB',
    'views/moduleB/viewB',

    'models/modelC',
    'views/moduleC/viewC'

], function (Backbone, CollectionA, ViewA, CollectionB, ViewB, ModelC, ViewC) {
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

            activeView.render().$el.appendTo($('#content'));
        },

        showViewA: function(){
            var that = this;

            var myCollection = new CollectionA();

            that._renderView(new ViewA({collection: myCollection}));

        },

        showViewB: function(){
            var that = this;

            var myCollection = new CollectionB();

            that._renderView(new ViewB({collection: myCollection}));
        },

        showViewC: function(){
            var that = this;

            var myCollection = new ModelC();

            that._renderView(new ViewC({collection: myCollection}));
        }

    });

    return ApprouterRouter;
});
