const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('./lib/errorHandler');
const app = express();
const mongoose = require('mongoose');
const { dbUri } = require('./config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const Router = require('./config/routes');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', Router);

// errorHandler must go after Router!
console.log('errorHandler is', errorHandler);
app.use(errorHandler);

app.listen(4000, () => console.log('Express is listening on port 4000'));
