/**
 * Created by songyangpu on 16/2/23.
 */
/*global Fullstack, Backbone*/
Fullstack.Routers = Fullstack.Routers || {};

(function () {
    'use strict';
    Fullstack.Routers.All = Backbone.Router.extend({
        routes: {
            '':'main',
            'doctor':'main'
        },
        initialize:function(){
        },
        execute: function(callback, args, name) {
            if (callback) callback.apply(this, args);
        },
        main: function () {
            new Fullstack.Views.Doctor();
        }
    });

    Fullstack.Routers.Router = new Fullstack.Routers.All();
    Backbone.history.start();
})();
