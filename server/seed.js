const { default: mongoose } = require("mongoose");
const category = require("./models/category");
const product = require("./models/product");

const seedCategories = [
    {
        name: "Food",
        products: []
    },
    {
        name: "Drinks",
        products: []
    },
    {
        name: "Other",
        products: []
    }
]

const seedProducts = [
    {
        name: "Juice",
        description: "The best juice.",
        price: 255,
        quantity: 101,
        categories: []
    },
    {
        name: "Pizza",
        description: "The best pizza",
        price: 505,
        quantity: 202,
        categories: []
    }
]

const seedDB = async () => {
    await category.deleteMany({});
    await category.insertMany(seedCategories);
    await product.deleteMany({});
    await product.insertMany(seedProducts);
    let foodCategory = await category.findOne({ name: "Food" });
    let drinksCategory = await category.findOne({ name: "Drinks" });
    let juice = await product.findOne({name: "Juice"})
    let pizza = await product.findOne({name: "Pizza"})
    await category.findOneAndUpdate({name:"Food"}, {products:[pizza._id]});
    await category.findOneAndUpdate({name:"Drinks"}, {products:[juice._id]});
    await product.findOneAndUpdate({name:"Juice"}, {categories:[drinksCategory._id]});
    await product.findOneAndUpdate({name:"Pizza"}, {categories:[foodCategory._id]});
}

seedDB().then(() => {
    console.log("Categories seed");
})
