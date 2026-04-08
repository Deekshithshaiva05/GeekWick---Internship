const history = [];

exports.save = (num1, num2, operator, result) => {
    history.push({
        num1,
        num2,
        operator,
        result,
        timestamp: new Date()
    });
};

exports.getAll = () => {
    return history;
};