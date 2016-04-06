/*global Fullstack, Backbone*/

Fullstack.Models = Fullstack.Models || {};

(function () {
    'use strict';

    Fullstack.Models.Doctor = Backbone.Model.extend({

        initialize: function () {
        },

        defaults: {
            _id: '',
            name: '',
            email: '',
            image: ''
        },

        validate: function (attrs, options) {
        },

        parse: function (response, options) {
            return response;
        }
    });

})();
