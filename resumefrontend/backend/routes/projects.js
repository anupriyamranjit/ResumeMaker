const router = require('express').Router();
let Projects = require('../model/projects.model');

router.route('/').get((req,res)=>{
	Projects.find()
	.then(projects => res.json(projects))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const position = req.body.position;
	const what = req.body.what;
	const tools = req.body.tools;
	const newProject = new Projects({name,position,what,tools});


	newProject.save()
	.then(() => res.json('Projects added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
	Projects.findById(req.params.id)
	.then(Projects => res.json(Projects))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
	Projects.findByIdAndDelete(req.params.id)
	.then(() => res.json('Projects Deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
	Projects.findById(req.params.id)
	.then(Projects => {
		Projects.name = req.body.name;
		Projects.position = req.body.position;
		Projects.what = req.body.what;
		Projects.tools = req.body.tools;

		Projects.save()
		.then(() => res.json('Projects Updated'))
		.catch(err => res.status(400).json(`Error ${err}`));

	}
		)
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
