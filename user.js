// path: ./user(.js) --> call the callable lib of functions
// exports those callable functions
var colors = require("colors");

// create a callable function named createUser
exports.createUser = function () {
    // ...
    console.log("I create a user!".blue);
}

// create a callable function named deleteUser
exports.deleteUser = function () {
    // ...
    console.log("I delete a user!".yellow);
}