module.exports = (req, res, next) => {

    const { num1, num2, operator } = req.body;

    if (num1 === undefined || num2 === undefined || !operator) {
        return res.status(400).json({
            error: "num1, num2 and operator are required"
        });
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return res.status(400).json({
            error: "num1 and num2 must be numbers"
        });
    }

    next();
};