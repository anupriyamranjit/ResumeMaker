const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectsSchema = new Schema ({
	name:{type:String, required: true},
	position:{type:String, required: true},
	what:{type:String, required: true},
	tools:{type:String, required: true},
});


// API Endpoints
const Projects = mongoose.model('Projects', projectsSchema)

module.exports = Projects;