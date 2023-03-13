// call the exportable functions from user.js and post.js
// similar to index.js
var post = require("./post"),
    user = require("./user");

user.createUser();

user.deleteUser();

post.createPost();

post.commentOnPost();
