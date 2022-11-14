require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => { console.log('Connected to the DataBase!'); });

require('./seed');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})
app.use(express.json());

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const categoriesRouter = require('./routes/categories');
app.use('/categories', categoriesRouter);


app.listen(3000, () => {
    console.log("Server started on port 3000!");
});