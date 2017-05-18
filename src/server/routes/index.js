const express = require("express");
const router = express.Router();

const TestifyRoute = require("./testimonials");
const ServiceRoute = require("./services");


router.get("/", (req, res) => {
	res.render("index", {title: "ZELA"});
});

router.use("/services", ServiceRoute);
router.use("/testimonials", TestifyRoute);

module.exports = router;
