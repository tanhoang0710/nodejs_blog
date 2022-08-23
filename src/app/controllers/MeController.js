const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class CourseController {
	storedCourses(req, res, next) {
		Course.find({})
			.then((courses) =>
				res.render('me/stored-courses', {
					courses: multipleMongooseToObject(courses),
				})
			)
			.catch(next);
	}
}

module.exports = new CourseController();
