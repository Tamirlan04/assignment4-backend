const express = require('express');
const app = express();

const orderRoutes = require('./routes/orders.routes');
const authRoutes = require('./routes/auth.routes');

const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
