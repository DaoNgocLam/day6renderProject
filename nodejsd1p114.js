// D20230306

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];  // create an 1D array named toDoList

var commands = {
    ls: function () {
        console.log(toDoList);
    },
    add: function (item) {
        toDoList.push(item);
    },
    rm: function (item) {
        console.log("I want to remove ", item, "!!!");
    }
};                 // create a procedure or a sequence of functions???

rl.on('line', function (line) {
    var words = line.split(' '),
        command = words.shift(),
        argsStr = words.join(' ');

    commands[command](argStr);

    console.log(words);

    toDoList.push(line);

    console.log(toDoList);

    rl.propmpt();

});