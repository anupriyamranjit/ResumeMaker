
const router = require('express').Router();
let Project = require('../model/project.model');

router.route('/').get((req,res)=>{
	Project.find()
	.then(project => res.json(project))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const position = req.body.position;
	const what = req.body.what;
	const tools = req.body.tools;


	newProject.save()
	.then(() => res.json('Project added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
	Project.findById(req.params.id)
	.then(Project => res.json(Project))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
	Project.findByIdAndDelete(req.params.id)
	.then(() => res.json('Project Deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
	Project.findById(req.params.id)
	.then(Project => {
		Project.name = req.body.name;
		Project.position = req.body.position;
		Project.what = req.body.what;
		Project.tools = req.body.tools;

		Project.save()
		.then(() => res.json('Project Updated'))
		.catch(err => res.status(400).json(`Error ${err}`));

	}
		)
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;