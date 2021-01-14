#!/usr/local/bin/node

nb_arg =  0;

// parcours les arguments
process.argv.forEach(function (val, index) {
    if (index === 2) { //recupere le premier argument
        nb_arg = val;
    } 
});

let factoriel = (nb, res) => {
    // console.log("nb: "+nb);
    // console.log("res: "+res);
    
    if (nb - 1 === 0) {
        console.log(res);
    } else {
        res += res * (nb - 1);
        factoriel(nb - 1, res);
    }

}

console.log(factoriel(nb_arg, 1));