/*global define*/

define([
    'underscore',
    'backbone',
    'models/modelA'
], function (_, Backbone, ModelAModel) {
    'use strict';

    var CollectionaCollection = Backbone.Collection.extend({
        model: ModelAModel
    });

    return CollectionaCollection;
});
