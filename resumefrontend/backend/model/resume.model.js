const mongoose = require('mongoose');
mongoose.set('debug', true);

const Schema = mongoose.Schema;

const resumeSchema = new Schema ({
	name:{type:String, required: true},
	data_uri:{type:String, required: true},
});


const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume;