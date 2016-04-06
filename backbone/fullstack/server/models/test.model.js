// Example model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
});

TestSchema.methods = {
};
TestSchema.statics = {
    get: function (area_id, cb) {
        this.findOne({ _id : area_id })
            .exec(cb);
    }
};

module.exports = mongoose.model('Test', TestSchema);
