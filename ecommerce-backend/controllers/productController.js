const path = "./data/products.json";
const { readData, writeData } = require("../utils/fileHandler");
const slugify = require("../utils/slugify");

// GET all products
exports.getProducts = (req, res) => {
    const products = readData(path);
    res.json(products);
};

// GET product by ID
exports.getProductById = (req, res) => {
    const products = readData(path);
    const product = products.find(p => p.id == req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
};

// GET product by SLUG
exports.getProductBySlug = (req, res) => {
    const products = readData(path);
    const product = products.find(p => p.slug === req.params.slug);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
};

// SEARCH products
exports.searchProducts = (req, res) => {
    const products = readData(path);
    const name = req.query.name?.toLowerCase();

    const result = products.filter(p =>
        p.productName.toLowerCase().includes(name)
    );

    res.json(result);
};

// FILTER by category
exports.getByCategory = (req, res) => {
    const products = readData(path);

    const result = products.filter(
        p => p.category.toLowerCase() === req.params.category.toLowerCase()
    );

    res.json(result);
};

// ADD product
exports.addProduct = (req, res) => {
    const products = readData(path);

    const newProduct = {
        id: products.length + 1,
        productName: req.body.productName,
        slug: slugify(req.body.productName),
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    products.push(newProduct);
    writeData(path, products);

    res.status(201).json(newProduct);
};

// UPDATE product
exports.updateProduct = (req, res) => {
    const products = readData(path);
    const index = products.findIndex(p => p.id == req.params.id);

    if (index === -1)
        return res.status(404).json({ message: "Product not found" });

    if (req.body.productName) {
        req.body.slug = slugify(req.body.productName);
    }

    products[index] = { ...products[index], ...req.body };

    writeData(path, products);

    res.json(products[index]);
};

// UPDATE STOCK (PATCH)
exports.updateStock = (req, res) => {
    const products = readData(path);
    const product = products.find(p => p.id == req.params.id);

    if (!product)
        return res.status(404).json({ message: "Product not found" });

    product.stock = req.body.stock;

    writeData(path, products);

    res.json(product);
};

// DELETE product
exports.deleteProduct = (req, res) => {
    let products = readData(path);

    products = products.filter(p => p.id != req.params.id);

    writeData(path, products);

    res.json({ message: "Product deleted successfully" });
};