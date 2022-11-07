const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

//GET
router.get('/', async (req, res) => {
    try {
        if (req.query.productId) {
            res.send(await Category.find({ products: req.query.productId }))
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
        res.status(500).json({ error: err.message });
    }
});

//POST
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create({
            name: req.body.name
        })
        res.status(201).send(newCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        let currentCategory = await Category.findById(id);
        if (!currentCategory) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        await Category.deleteOne({ _id: id });
        await Product.updateMany({ _id: currentCategory.products }, { $pullAll: { categies: [{ _id: id }] } });
        res.status(204).send({ message: "Deleted successfuly." });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;