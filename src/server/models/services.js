const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
	icon: {type: String, required: true},
	title: {type: String, required: true},
	content: {type: String, required: true}
});

module.exports = mongoose.model("Service", ServiceSchema);
