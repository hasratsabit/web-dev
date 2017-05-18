const express = require("express");
const UserTestify = require("../models/testimonials");
const router = express.Router();

router.get("/", (req, res) => {
	Testify.find((err, data) => {
		res.render("index", {data: data})
	});
});

router.post("/", (req, res) => {
	const Testify = new UserTestify()
	Testify.imagePath = req.body.imagePath,
	Testify.name = req.body.name,
	Testify.comment = req.body.comment
	Testify.save((err, data) => {
		if(err){
			throw err
		}else {
			res.json(data)
		}
	});
});



module.exports = router;
