const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
	{
		_id: { type: Number },
		name: { type: String, maxLength: 255, require: true },
		description: { type: String, maxLength: 600 },
		image: { type: String, maxLength: 255 },
		videoId: { type: String, maxLength: 255, require: true },
		level: { type: String, maxLength: 255 },
		slug: { type: String, slug: 'name', unique: true },
		deletedAt: {},
	},
	{ _id: false, timestamps: true }
);

Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
