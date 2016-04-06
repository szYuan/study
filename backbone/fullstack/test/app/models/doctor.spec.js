describe("Fullstack.Models.Doctor", function() {
    before(function () {
        // Create a reference for all internal suites/specs.
        // Use internal method to clear out existing data.
        this.Doctor = new Fullstack.Models.Doctor();
    });
    after(function () {
        // Remove the reference.
        this.Doctor = null;
    });

    it('should have the correct defaults', function() {
        var Doctor=this.Doctor;
        console.dir(Doctor.get('_id'));
        expect(Doctor.get('_id')).to.equal('');
        expect(Doctor.get('email')).to.equal('');
        expect(Doctor.get('name')).to.equal('');
        expect(Doctor.get('image')).to.equal('');
    });

    it('should honor passed in attributes', function() {
        var newDoctor = new Fullstack.Models.Doctor({
            '_id': 1,
            'email': 'test@turingcat.com',
            'name':'test',
            'image':'http://'
        });
        expect(newDoctor.get('_id')).to.equal(1);
        expect(newDoctor.get('email')).to.equal('test@turingcat.com');
        expect(newDoctor.get('name')).to.equal('test');
        expect(newDoctor.get('image')).to.equal('http://');
    })
});