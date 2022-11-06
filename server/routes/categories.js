const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

//GET
router.get('/', async (req, res) => {
    try {
        if (req.query.productId) {
            res.send(await Category.find({products: req.query.productId}))
            return;
        }
        res.send(await Category.find());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET BY ID
router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        let currentProduct = await Product.findById(req.params.id);
        if (!currentProduct) {
            res.status(404).send({ message: 'Not Found!' })
            return;
        }
        res.send(currentProduct);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

module.exports = router;