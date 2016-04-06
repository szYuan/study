
describe("Fullstack.Collections.Tests", function () {
    before(function () {
        // Create a reference for all internal suites/specs.
        // Use internal method to clear out existing data.
        this.Tests = new Fullstack.Collections.Tests();
    });
    after(function () {
        // Remove the reference.
        this.Tests = null;
    });
    describe("creation", function () {
        it("has default values", function () {
            expect(this.Tests).to.have.length(0);
        });
    });
});
