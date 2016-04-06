describe("Fullstack.Collections.Doctors", function () {
    before(function () {
        // Create a reference for all internal suites/specs.
        // Use internal method to clear out existing data.
        this.Doctors = new Fullstack.Collections.Doctors();
    });
    after(function () {
        // Remove the reference.
        this.Doctors = null;
    });
    describe("creation", function () {
        it("has default values", function () {
            expect(this.Doctors).to.have.length(0);
        });
        // -- Omitted in Book. --
        it("should be 5 doctors on fetch", function (done) {
            // Stash reference to save context.
            var Doctors = this.Doctors;
            // Before fetch.
            expect(Doctors).to.have.length(0);
            // After fetch.
            Doctors.once("reset", function () {
                expect(Doctors).to.have.length(5);
                Doctors.reset();
                done();
            });
            Doctors.fetch({ reset: true });
        });

    });

    describe("modification", function () {
        beforeEach(function () {
            // Load a pre-existing Doctor.
            this.Doctors.create({
                title: "Test Doctor #1",
                text: "A pre-existing Doctor from beforeEach."
            });
        });
        afterEach(function () {
            // Wipe internal data and reset collection.
            this.Doctors.reset();
        });
        it("has a single Doctor", function () {
            var Doctors = this.Doctors, Doctor;
            expect(Doctors).to.have.length(1);
            // Check model attributes.
            Doctor = Doctors.at(0);
            expect(Doctor.get("title")).to.contain("#1");
            expect(Doctor.get("text")).to.contain("pre-existing");
        });

        it("can delete a Doctor", function (done) {
            var Doctors = this.Doctors, Doctor;
            // After shift.
            Doctors.once("remove", function () {
                expect(Doctors).to.have.length(0);
                done();
            });
            // Remove and return first model.
            Doctor = Doctors.shift();
        });

        // -- Omitted in Book. --
        it("can create a second Doctor", function () {
            var Doctors = this.Doctors,
                Doctor = Doctors.create({
                    title: "Test Doctor #2",
                    text: "A new Doctor, created in the test."
                });
            expect(Doctors).to.have.length(2);
            // Check model attributes.
            Doctor = Doctors.at(1);
            expect(Doctor.get("title")).to.contain("#2");
            expect(Doctor.get("text")).to.contain("new Doctor");
        });

    });
});