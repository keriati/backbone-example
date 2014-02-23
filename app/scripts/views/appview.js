/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AppviewView = Backbone.View.extend({
        template: JST['app/scripts/templates/appview.ejs'],

        render: function() {
            this.$el.html(this.template());

            return this;
        }
    });

    return AppviewView;
});
