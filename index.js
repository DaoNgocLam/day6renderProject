
var name = `First App`;
var servername = `localhost`;
var port = 3000;


var http = require(`http`);
// create a Server as localhost:port 3000
var httpServer = http.createServer(function (req, res) {
    res.end(`This is my first node app.`);
});

httpServer.listen(port, function () {
    console.log(`Server of "${name}" is listening on ${servername}:${port}`);
});

// httpServer.listen(8080, function(){
//     console.log(`Server of "${name}" is listening on ${servername}:8080`);
// });


// stack functions
function createPost() {
    // ...
    console.log("A post is created!");

}

function commentOnPost() {
    // ...
    console.log("A post's comment is created!");

}

function createUser() {
    // ...
    console.log("A user is created!");

}

function deleteUser() {
    // ...
    console.log("A user is deleted!");

}


// call functions
var post = require("./post"),
    user = require("./user");

user.createUser();

user.deleteUser();

post.createPost();

post.commentOnPost();