
const router = require('express').Router();
let Award = require('../model/award.model');

router.route('/').get((req,res)=>{
	Award.find()
	.then(award => res.json(award))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const name = req.body.name;
	const what = req.body.what;
	const year = Number(req.body.year);
	const newAward = new Award({name,what,year});

	newAward.save()
	.then(() => res.json('Award added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;