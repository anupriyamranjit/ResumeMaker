const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const languagesSchema = new Schema ({
	name:{type:String, required: true},
});


// API Endpoints
const Languages = mongoose.model('Languages', languagesSchema)

module.exports = Languages;