// path: ./post(.js) --> call the callable lib of functions
// exports those callable functions
var colors = require("colors");

// create a callable function named createPost
exports.createPost = function () {
    // ...
    console.log("I'm creating a post!".red);
}

// create a callable function named commentOnPost
exports.commentOnPost = function () {
    // ...
    console.log("I have a cooment on this post!".green);
}