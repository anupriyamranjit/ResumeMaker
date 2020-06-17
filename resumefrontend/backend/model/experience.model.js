const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const experienceSchema = new Schema ({
	name:{type:String, required: true},
	position:{type:String, required: true},
	firstLine:{type:String, required: true},
	secondLine:{type:String, required: true},
	thirdLine:{type:String, required:true}
});

// API Endpoints

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience;