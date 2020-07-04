
const router = require('express').Router();
let Languages = require('../model/languages.model');

router.route('/').get((req,res)=>{
	Languages.find()
	.then(languages => res.json(languages))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const newLanguages = new Languages({name});

	newLanguages.save()
	.then(() => res.json('Languages added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	Languages.findById(req.params.id)
	.then(Languages => res.json(Languages))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
	Languages.findByIdAndDelete(req.params.id)
	.then(() => res.json('Languages Deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
	Languages.findById(req.params.id)
	.then(Languages => {
		Languages.name = req.body.name;
		Languages.save()
		.then(() => res.json('Languages Updated'))
		.catch(err => res.status(400).json(`Error ${err}`));

	}
		)
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;