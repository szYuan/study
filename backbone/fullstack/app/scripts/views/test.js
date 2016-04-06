/*global Fullstack, Backbone, JST*/

Fullstack.Views = Fullstack.Views || {};

(function () {
    'use strict';
    Fullstack.Views.Test = Backbone.View.extend({
        template: JST['app/scripts/templates/test.ejs'],
        tagName: 'div',
        collection:new Fullstack.Collections.Tests(),
        className: '',
        events: {},
        initialize: function (collection) {
            if(collection instanceof this.collectionFun){
                this.collection=collection;
            }else{
                this.collection=new this.collectionFun();
                this.collection.fetch({beforeSend:function(xhr){},reset:true,data:{}});
            }
            this.listenTo(this.collection, 'reset', this.render);
        },
        render: function () {
            this.$el.html(this.template({tests:this.collection.toJSON()}));
            $('#body').html(this.$el.html());
            this.trigger("render", "render done!");
            return this;
        },
        remove: function(){
            this.undelegateEvents();
        }
    });
})();
