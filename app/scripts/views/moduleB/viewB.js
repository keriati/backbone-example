/*global define*/

define([
    'underscore',
    'backbone',
    'templates'
], function (_, Backbone, JST) {
    'use strict';

    var ViewbView = Backbone.View.extend({
        template: JST['app/scripts/templates/viewB.ejs'],

        render: function() {
            console.log(JST);
            console.log('rendering')
            this.$el.html(this.template());

            return this;
        }
    });

    return ViewbView;
});
