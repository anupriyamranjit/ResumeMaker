const router = require('express').Router();
let Framework = require('../model/frameworks.model');

router.route('/').get((req,res)=>{
	Framework.find()
	.then(framework => res.json(framework))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const newFramework = new Framework({name});

	newFramework.save()
	.then(() => res.json('Framework added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	Framework.findById(req.params.id)
	.then(Framework => res.json(Framework))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
	Framework.findByIdAndDelete(req.params.id)
	.then(() => res.json('Framework Deleted.'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
	Framework.findById(req.params.id)
	.then(Framework => {
		Framework.name = req.body.name;
		Framework.save()
		.then(() => res.json('Framework Updated'))
		.catch(err => res.status(400).json(`Error ${err}`));

	}
		)
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;