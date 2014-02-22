/*global define*/

define([
    'underscore',
    'backbone',
    'templates'
], function (_, Backbone, JST) {
    'use strict';

    var ViewcView = Backbone.View.extend({
        template: JST['app/scripts/templates/viewC.ejs'],

        render: function() {
            console.log('rendering')
            this.$el.html(this.template());

            return this;
        }
    });

    return ViewcView;
});
