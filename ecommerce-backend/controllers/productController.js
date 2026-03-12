const path = "./data/products.json";
const { readData, writeData } = require("../utils/fileHandler");

exports.getProducts = (req, res) => {
    const products = readData(path);
    res.json(products);
};

exports.getProductById = (req, res) => {
    const products = readData(path);
    const product = products.find(p => p.id == req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
};

exports.addProduct = (req, res) => {
    const products = readData(path);

    const newProduct = {
        id: products.length + 1,
        productName: req.body.productName,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    products.push(newProduct);
    writeData(path, products);

    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const products = readData(path);

    const index = products.findIndex(p => p.id == req.params.id);

    if (index === -1) return res.status(404).json({ message: "Product not found" });

    products[index] = { ...products[index], ...req.body };

    writeData(path, products);

    res.json(products[index]);
};

exports.deleteProduct = (req, res) => {
    let products = readData(path);

    products = products.filter(p => p.id != req.params.id);

    writeData(path, products);

    res.json({ message: "Product deleted" });
};