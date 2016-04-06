/*global Fullstack, Backbone*/

Fullstack.Collections = Fullstack.Collections || {};

(function () {
    'use strict';
    Fullstack.Collections.Doctors = Backbone.Collection.extend({
        url: '/doctors',
        completed: function () {
            console.log("completed");
            return this.where({completed: true});
        },
        model: Fullstack.Models.Doctor
    });
})();
