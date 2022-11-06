const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');
const { default: mongoose } = require('mongoose');

// GET
router.get('/', async (req, res) => {
    try {
        if (req.query.categoryId) {
            res.send(await Product.find({categories: req.query.categoryId}))
            return;
        }
        res.send(await Product.find())
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

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
})

//POST
router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            categories: req.body.categories
        })
        await Category.updateMany({ _id: newProduct.categories }, { $push: { products: newProduct._id } })
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

//PUT
router.patch('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        let currentProduct = await Product.findById(id);
        if (!currentProduct) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        await Category.updateMany({ _id: currentProduct.categories }, { $pullAll: { products: [{ _id: id }] } })
        let newProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
            returnOriginal: false
        });
        await Category.updateMany({ _id: newProduct.categories }, { $push: { products: id } })
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        let currentProduct = await Product.findById(id);
        if (!currentProduct) {
            res.status(404).send({ message: 'Not Found!' });
            return;
        }
        await Product.deleteOne({ _id: id });
        await Category.updateMany({ _id: currentProduct.categories }, { $pullAll: { products: [{ _id: id }] } });
        res.status(204).send({ message: "Deleted successfuly." });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;