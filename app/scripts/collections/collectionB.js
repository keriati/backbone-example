/*global define*/

define([
    'underscore',
    'backbone',
    'models/modelB'
], function (_, Backbone, ModelBModel) {
    'use strict';

    var CollectionbCollection = Backbone.Collection.extend({
        model: ModelBModel
    });

    return CollectionbCollection;
});
