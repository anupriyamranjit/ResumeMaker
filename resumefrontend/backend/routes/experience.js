
const router = require('express').Router();
let Experience = require('../model/experience.model');

router.route('/').get((req,res)=>{
	Experience.find()
	.then(experience => res.json(experience))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const position = req.body.position;
	const firstLine = req.body.firstLine;
	const secondLine = req.body.secondLine;
	const thirdLine = req.body.thirdLine;
	const newExperience = new Experience({name,position,firstLine,secondLine,thirdLine});


	newExperience.save()
	.then(() => res.json('Experience added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
	Experience.findById(req.params.id)
	.then(Experience => res.json(Experience))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
	Experience.findByIdAndDelete(req.params.id)
	.then(() => res.json('Experience Deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
	Experience.findById(req.params.id)
	.then(Experience => {
		Experience.name = req.body.name;
		Experience.position = req.body.position;
		Experience.firstLine = req.body.firstLine;
		Experience.secondLine = req.body.secondLine;
		Experience.thirdLine = req.body.thirdLine;

		Experience.save()
		.then(() => res.json('Experience Updated'))
		.catch(err => res.status(400).json(`Error ${err}`));

	}
		)
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;