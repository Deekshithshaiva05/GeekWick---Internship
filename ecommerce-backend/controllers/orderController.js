const path = "./data/orders.json";
const { readData, writeData } = require("../utils/fileHandler");

exports.createOrder = (req, res) => {

    const orders = readData(path);

    const newOrder = {
        id: orders.length + 1,
        products: req.body.products,
        totalAmount: req.body.totalAmount,
        status: "Placed"
    };

    orders.push(newOrder);
    writeData(path, orders);

    res.status(201).json(newOrder);
};