const os = require('os');
const chalk = require('chalk');

const add = require('./custom_modules/add');
const subtract = require('./custom_modules/subtract');

const user = os.userInfo().username;
const platform = os.platform();

console.log(chalk.blue('Welcome to the Node.js Calculator!'));
console.log(chalk.green(`User: ${user}`));
console.log(chalk.green(`Platform: ${platform}\n`));

const a = 5;
const b = 3;

console.log(chalk.yellow(`Addition: ${a} + ${b} = ${add(a, b)}`));
console.log(chalk.yellow(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`));

console.log(chalk.magenta('My Registration Number: BD/2025/TC3/051'));