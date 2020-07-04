const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const frameworkSchema = new Schema ({
	name:{type:String, required: true},
});


// API Endpoints
const Framework = mongoose.model('Framework', frameworkSchema)

module.exports = Framework;