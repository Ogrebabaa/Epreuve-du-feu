#!/usr/local/bin/node
tab_arg = [];
// parcours les arguments
process.argv.forEach(function (val, index) {
    if (index >= 2) { //recupere le premier argument
        tab_arg.push(val);
    } 
});

//algorithme de tri
if (tab_arg != null) {
    console.log(tab_arg);
} else {
    console.log("J'ai besoin d'un paramêtre !");
}

