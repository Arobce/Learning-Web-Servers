const chalk = require("chalk");

const printErrorMessage = message => console.log(chalk.inverse.red(message));

const printSuccessMessage = message => console.log(chalk.inverse.green(message));

module.exports = {
    printErrorMessage,
    printSuccessMessage
}