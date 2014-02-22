/*global define*/

define([
    'underscore',
    'backbone',
    'templates'
], function (_, Backbone, JST) {
    'use strict';

    var ViewaView = Backbone.View.extend({
        template: JST['app/scripts/templates/viewA.ejs'],

        render: function() {
            console.log(JST);
            console.log('rendering')
            this.$el.html(this.template());

            return this;
        }
    });

    return ViewaView;
});
