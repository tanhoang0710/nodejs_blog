const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

app.use(function (req, res, next) {
	if (['vethuong', 'vevip'].includes(req.query.ve)) {
		req.face = 'gach gach gach';
		return next();
	}
	res.status(403).json({
		message: 'Access denied',
	});
});

// Template engine
app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		helpers: {
			sum: (a, b) => a + b,
		},
	})
);
app.set('view engine', 'hbs');

// app.set('views', path.join(__dirname, 'resource', 'views')); // chay bang cmd hay terminal deu duoc
app.set('views', path.join(__dirname, 'resource\\views')); // neu chay bang cmd

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// neu chay server bang terminal
// app.set("views", path.join(__dirname, "resource/views"));

// Routes init
route(app);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
