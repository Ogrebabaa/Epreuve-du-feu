#!/usr/local/bin/node

let nb;
// parcours les arguments
process.argv.forEach(function (val, index) {
    if (index === 2) { //recupere le premier argument
        nb = val;
    } else {
        nb = 0;
    }
});

console.log(nb);