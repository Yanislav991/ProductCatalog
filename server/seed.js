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

const seedDB = async () => {
    await category.deleteMany({});
    await category.insertMany(seedCategories);
}

seedDB().then(() => {
    console.log("Categories seed");
})
