// JavaScript source code
let number = { random: "1" };
<<<<<<< HEAD
number.random = function() {
    return Math.random();
}
=======

number.random =  () => {
    return Math.round( Math.random() * 100);
}


>>>>>>> 5ed6732bd4b952d32ca87f6372e9741459e3dadc
console.log(number.random());