// JavaScript source code
<<<<<<< HEAD

let chaine = '1231f156415';

//1
let regex = /[a-z]+/;
console.log(regex.exec(chaine));

//console.log(/[a-z]+/.exec(chaine));


//2
let regex2 = new RegExp('\\D+');
console.log(regex2.exec(chaine));

//console.log(/\D/.exec(chaine));
=======
const text = '1231f156415';

//1
console.log(/[a-z]+/.exec(text));

//2
console.log(/\D/.exec(text));
>>>>>>> 5ed6732bd4b952d32ca87f6372e9741459e3dadc
