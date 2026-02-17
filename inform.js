const os = require('os');

// Get current Node.js version
const nodeVersion = process.version;

// Get system information
const username = os.userInfo().username;
const platform = os.platform();

console.log(`Hello ${username}!`);
console.log(`Node.js Version: ${nodeVersion}`);
console.log(`Current User: ${username}`);
console.log(`Operating System: ${platform}`);
console.log(`Current Directory: ${__dirname}`);
console.log(`Current File: ${__filename}\n`);

const internship = {
    name: "GeekWick Internship Program",
    domain: "Data Analytics",
    id: "4AD22CI009",
    duration: "4 months",
    startDate: "February 2026"
};

console.log("Internship Details:");
console.log(`Name: ${internship.name}`);
console.log(`Domain: ${internship.domain}`);
console.log(`ID: ${internship.id}`);
console.log(`Duration: ${internship.duration}`);
console.log(`Start Date: ${internship.startDate}`);


let array = [1, 2, 3, 4, 5];
console.log("\nArray:", array);

let array1 = new Array(6, 7, 8, 9, 10);
console.log("Array1:", array1);