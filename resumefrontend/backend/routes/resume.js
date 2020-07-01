const router = require('express').Router();
let Resume = require('../model/resume.model');

router.route('/').get((req,res)=>{
	Resume.find()
	.then(resume => res.json(resume))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const data_uri = req.body.data_uri;
	const newResume = new Resume({name,data_uri});


	newResume.save()
	.then(() => res.json('Resume added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
	Resume.findById(req.params.id)
	.then(Resume => res.json(Resume))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
	Resume.findByIdAndDelete(req.params.id)
	.then(() => res.json('Resume Deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
	Resume.findById(req.params.id)
	.then(Resume => {
		Resume.name = req.body.name;
		Resume.data_uri = req.body.data_uri;

		Resume.save()
		.then(() => res.json('Resume Updated'))
		.catch(err => res.status(400).json(`Error ${err}`));

	}
		)
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
