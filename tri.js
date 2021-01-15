#!/usr/local/bin/node
tab_arg = [];
tab_res = [];

// parcours les arguments
process.argv.forEach(function (val, index) {
    if (index >= 2) { //recupere le premier argument
        tab_arg.push(val);
    } 

});

let getMinus = (arr) => {
    let minus = arr[0];
    arr.forEach(element => {
        if (element < minus) {
            minus = element;
        }
    });

    return minus;
}


let afficheArr = (arr) => {
    let res = "";
    arr.forEach(element => {
        res += element + " ";
    })
    console.log(res);
}

//algorithme de tri
if (tab_arg.length != 0) {

    let iterations = tab_arg.length;

    for (i = 0; i < iterations; i++) {
        
        let valueToInsert = getMinus(tab_arg);;
        let index_value = tab_arg.indexOf(valueToInsert);
        tab_res.push(valueToInsert);
        tab_arg.splice(index_value, 1);
        
    }

    //affichage
    afficheArr(tab_res);
} else {
    console.log("J'ai besoin de paramètre !");
}

