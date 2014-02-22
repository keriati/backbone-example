/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ModelbModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return ModelbModel;
});
