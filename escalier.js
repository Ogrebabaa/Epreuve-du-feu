#!/usr/local/bin/node

let nb;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// parcours les arguments
process.argv.forEach(function (val, index) {
    if (index === 2) { //recupere le premier argument
        nb = val;
    } else {
        nb = 0;
    }
});

output = [];

for (i = 0; i < nb; i++) {
    output.push(" "); //rempli le tableau d'espace vide
}

for (i = nb-1; i >= 0; i--) {
    output[i] = "#";
    console.log(output.reduce(reducer));
}


