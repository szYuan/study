/*global Fullstack, Backbone*/

Fullstack.Models = Fullstack.Models || {};

(function () {
  'use strict';

  Fullstack.Models.Test = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
        _id:''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
