const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class CourseController {
	storedCourses(req, res, next) {
		Promise.all([Course.find({}), Course.countDocumentsDeleted()])
			.then(([courses, deletedCount]) =>
				res.render('me/stored-courses', {
					deletedCount,
					courses: multipleMongooseToObject(courses),
				})
			)
			.catch(next);
	}
	trashCourses(req, res, next) {
		Course.findDeleted({})
			.then((courses) =>
				res.render('me/trash-courses', {
					courses: multipleMongooseToObject(courses),
				})
			)
			.catch(next);
	}
}

module.exports = new CourseController();
