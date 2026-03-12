const path = "./data/categories.json";
const { readData, writeData } = require("../utils/fileHandler");

exports.getCategories = (req, res) => {
    res.json(readData(path));
};

exports.addCategory = (req, res) => {
    const categories = readData(path);

    const newCategory = {
        id: categories.length + 1,
        name: req.body.name
    };

    categories.push(newCategory);
    writeData(path, categories);

    res.status(201).json(newCategory);
};