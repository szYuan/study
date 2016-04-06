/*global Fullstack, Backbone*/

Fullstack.Collections = Fullstack.Collections || {};

(function () {
    'use strict';
    Fullstack.Collections.Tests = Backbone.Collection.extend({
        url: '/tests',
        model: Fullstack.Models.Test
    });
})();
