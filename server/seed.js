const { default: mongoose } = require("mongoose");
const category = require("./models/category")

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
        name: "Juice TEST update 555",
        description: "The best juice 2",
        price: 255,
        quantity: 101,
        categories: ["63681572260c551d23937418"]
    }
]

const seedDB = async () => {
    await category.deleteMany({});
    await category.insertMany(seedCategories);
}

seedDB().then(() => {
    console.log("Categories seed");
})
