const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

router.get('/', async (req, res) => {
    try {
        res.send(await Category.find())
    } catch (err) {
        res.status(500).json({ error: err.message })

    }
})

module.exports = router;