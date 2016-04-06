
describe("Fullstack.Views.Test template rendering", function() {
    it('render by remote data', function (done) {
        var Tests = new TestsCollection();
        Tests.create({
            '_id': 1
        });
        var view = new Fullstack.Views.Test(Tests);
        view.once('render', function () {
            expect(view.$el.html()).to.have.string('Your content here.');
            done();
        });
        view.render();
    });
});
