const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema = new Schema ({
	name:{type:String, required: true},
	position:{type:String, required: true},
	what:{type:String, required: true},
	tools:{type:String, required: true},
})


// API Endpoints
const Project = mongoose.model('Project', projectSchema)

module.exports = Project;