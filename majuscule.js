#!/usr/local/bin/node

ch_arg =  "";
final_string = "";
// parcours les arguments
process.argv.forEach(function (val, index) {
    if (index === 2) { //recupere le premier argument
        ch_arg = val;
    } else {
        ch_arg = "Erreur de chargement de l'argument";
    }
});

for (i = 0; i < ch_arg.length ; i++) {
    if (i % 2 === 0) {

        char = ch_arg[i].toUpperCase();
        final_string = final_string.concat(char);

    } else {
        char = ch_arg[i].toLowerCase();
        final_string = final_string.concat(char);
    }
    
}

console.log(final_string);
