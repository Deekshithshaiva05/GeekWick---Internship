const prompt = require('prompt-sync')();

console.log("Simple Calculator");

let num1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /, %, **): ").trim();
let num2 = parseFloat(prompt("Enter second number: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid number input!");
} else {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 === 0 ? "Cannot divide by zero!" : num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        default:
            result = "Invalid operator!";
    }

    console.log("Result:", result);
}