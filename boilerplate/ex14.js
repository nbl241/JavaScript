// JavaScript source code
<<<<<<< HEAD
let timer = setInterval(show, 1000);
let compteur = 0;

function show() {
    console.log('coucou');
    compteur++;
    if (compteur === 3) {
        clearInterval(timer);
    }
}
=======
/*
let compteur = 0;
let timer = setInterval(show, 1000);

function show() {
    console.log('coucou');
    //compteur = compteur + 1;
    compteur++;
    if (compteur == 3) {
        clearInterval(timer);
    }
}*/

var compteur = 0;
let timer = setInterval(() => {
    console.log('coucou');
    compteur++;
    if (compteur == 3) {
        clearInterval(timer);
    }
}, 1000)
>>>>>>> 5ed6732bd4b952d32ca87f6372e9741459e3dadc
