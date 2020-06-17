const mongoose = require('mongoose');
mongoose.set('debug', true);

const Schema = mongoose.Schema;

const awardSchema = new Schema ({
	name:{type:String, required: true},
	what:{type:String, required: true},
	year:{type:Number, required: true},
});


const Award = mongoose.model('Award', awardSchema)

module.exports = Award;