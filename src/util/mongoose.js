module.exports = {
	multipleMongooseToObject: function (mongooses) {
		return mongooses.map((mongoose) => mongoose.toObject());
	},
	mongooseToObjectl: function (mongoose) {
		return mongoose ? mongoose.toObject() : mongoose;
	},
};
