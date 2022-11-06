const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

// GET
router.get('/', async (req, res) => {
    try {
        res.send(await Product.find())
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
        await Category.updateMany({ '_id': newProduct.categories }, { $push: { products: newProduct._id } })
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// GET BY ID

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        res.send(await Product.findById(req.params.id))
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

//PUT
router.patch('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let currentProduct = await Product.findById(id);
        console.log("CUR ---------------");
        console.log(currentProduct);
        console.log("CUR ---------------");
        await Category.updateMany({ '_id': currentProduct.categories }, { $pullAll: { 'products': [{ _id: id }] } })
        let newProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
            returnOriginal: false
        });
        console.log("NEW ---------------");
        console.log(newProduct);
        console.log("NEW ---------------");
        await Category.updateMany({ '_id': newProduct.categories }, { $push: { products: id } })
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;