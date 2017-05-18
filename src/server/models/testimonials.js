const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestimonialsSchema = new Schema({
	imagePath: {type: String, required: true},
	name: {type: String, required: true},
	comment: {type: String, required: true}
});

module.exports = mongoose.model("testimonial", TestimonialsSchema);
