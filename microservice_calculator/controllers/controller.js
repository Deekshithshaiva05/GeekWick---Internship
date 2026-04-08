const operation = require('../operations/operation');
const repo = require('../repository/repo');

exports.calculate = (req, res) => {
    try {
        const { num1, num2, operator } = req.body;

        const result = operation.performOperation(num1, num2, operator);

        repo.save(num1, num2, operator, result);

        res.status(200).json({
            message: "Success",
            result
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.getHistory = (req, res) => {
    res.json(repo.getAll());
};