// JavaScript source code
<<<<<<< HEAD
//1
let show = function () {
    console.log('coucou');
};
setInterval(show, 1000);

//2 Methode anonyme
setInterval(function () {
    console.log('coucou');
}, 1000);

//3 arrow function ES6
setInterval(() => {
    console.log('coucou');
}, 1000);
=======

//1
function show() {
    console.log('coucou');
    //console.log(message);
}

setInterval(show, 1000);


//2
setInterval(function () {
    console.log('coucou anonyme');
}, 1000);


//3
setInterval(() => {
    console.log('coucou arrow function ES6');
}, 1000);
>>>>>>> 5ed6732bd4b952d32ca87f6372e9741459e3dadc
