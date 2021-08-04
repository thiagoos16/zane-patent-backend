const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const GeneralOrientationsSchema = new Schema({
    which_is: {
        type: String
    },
    what_is_it_for: {
        type: String
    },
    average_time: {
        type: String
    },
    values: [{
        value: {
            type: Number
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    }]
});

GeneralOrientationsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('GeneralOrientations', GeneralOrientationsSchema);