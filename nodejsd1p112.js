// D20230303
// jquery style $("#someEl"}.clickfunction()  {..});

var wakeUp = function (callback) {
    console.log(`I am waking up!`);
    if (callback) {
        if (typeof callback === 'function') {
            callback();
        }
    }

}

var checkPhone = function (callback) {
    console.log("Checking phone ...");
    if (callback) {
        if (typeof callback === 'function') {
            callback();
        }
    }

}

var eatBreakfast = function (callback) {
    console.log("I am eating breakfast ...");
    if (callback) {
        if (typeof callback === 'function') {
            callback();
        }
    }

}


// BAD! Synchronous way
console.log('\nCall the function wakeUp():');
wakeUp();

console.log('\nCall the function wakeUp():');
checkPhone();

console.log('\nCall the function wakeUp():');
eatBreakfast();

// NESTED Synchonous way
console.log('\nCall the nested function wakeUp() --> checkPhone() --> eatBreakfast():');
wakeUp(function () {
    checkPhone(function () {
        eatBreakfast();
    })
}); 