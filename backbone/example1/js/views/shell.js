directory.ShellView = Backbone.View.extend({

    initialize: function () {
        this.searchresultsView = new directory.SearchView({tagName: 'ul', className: 'dropdown-menu'});
    },

    render: function () {
        this.$el.html(this.template());
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });

        $('.navbar-search', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "keyup .search-query": "search",
        "keypress .search-query": "onkeypress"
    },

    search: function (event) {
        // search
        setTimeout(function () {
            $('.dropdown').addClass('open');
        });
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    },

    selectMenuItem: function(menuItem) {
        $('.navbar .nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }

});