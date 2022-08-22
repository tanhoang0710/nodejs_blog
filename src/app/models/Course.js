const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
	{
		name: { type: String, maxLength: 255, require: true },
		description: { type: String, maxLength: 600 },
		image: { type: String, maxLength: 255 },
		videoId: { type: String, maxLength: 255, require: true },
		level: { type: String, maxLength: 255 },
		slug: { type: String, slug: 'name', unique: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Course', Course);
