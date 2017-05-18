const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Services = require("../models/services");

router.get("/", (req, res, next) => {
	Services.find((err, ServiceData) => {
		if(err){
			throw err
		}else {
			res.send(ServiceData);
		}
	});
});

router.post("/", (req, res) => {
	const Service = new Services();
	Service.icon = req.body.icon,
	Service.title = req.body.title,
	Service.content = req.body.content
	Service.save((err, ServiceData) => {
		if(err){
			throw err;
		}else{
			res.json(ServiceData)
		}
	})
})


module.exports = router;
