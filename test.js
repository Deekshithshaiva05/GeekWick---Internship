const fs = require('fs');

const message = process.argv.slice(2).join(' ') || "Hello, World!";

fs.appendFile('app.log', message + '\n', () => {
    console.log('Message logged to app.log');
});

console.log("program finished");