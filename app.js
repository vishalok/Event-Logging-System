const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const logRoutes = require('./routes/logRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api/logs', logRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
