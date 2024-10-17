const mongoose = require('mongoose');

// Define the schema
const dataSchema = new mongoose.Schema({
    module_name: String,
    module_description: String,
    module_start_date: Date,
    module_end_date: Date,
    order: Number,
    activity_list: Array,
});

// Create the model
const DataModel = mongoose.model('programs', dataSchema); // This refers to the 'data' collection in MongoDB

// Export the model
module.exports = DataModel;
