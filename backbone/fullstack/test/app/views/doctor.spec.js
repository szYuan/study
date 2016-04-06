describe("Fullstack.Views.Doctor template rendering", function() {
    it('render by remote data', function (done) {
        var view = new Fullstack.Views.Doctor();
        view.once('render', function () {
            expect(view.$el.html()).to.have.string('Your content here.');
            done();
        })
    });
    it('render by collection instance', function() {
        var Doctors = new Fullstack.Collections.Doctors();
        Doctors.create({
            '_id': 1,
            'email': 'test@turingcat.com',
            'name':'Doctor Test',
            'image':'http://'
        });
        var view = new Fullstack.Views.Doctor(Doctors);
        view.render();
        expect(view.$el.html()).to.have.string('test@turingcat.com');
        expect(view.$el.html()).to.have.string('Doctor Test');
    });
});