
describe("Fullstack.Models.Test", function() {
    before(function () {
        this.Test = new Fullstack.Models.Test();
    });
    after(function () {
        this.Test = null;
    });

    it('should have the correct defaults', function() {
        var Test=this.Test;
        expect(Test.get('_id')).to.equal('');
    });

    it('should honor passed in attributes', function() {
        var newTest = new Fullstack.Models.Test({
            '_id': 1
        });
        expect(newTest.get('_id')).to.equal(1);
    })
});
