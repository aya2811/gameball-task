const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const productRoute = require('./routes/product.routes');
const categoryRoute = require('./routes/category.routes');
const subcategoryRoute = require('./routes/subcategory.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/',productRoute);
app.use('/api/',categoryRoute);
app.use('/api/',subcategoryRoute);

module.exports = app;