// JavaScript source code
<<<<<<< HEAD
const date = new Date(2015, 9, 23);
console.log(date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',     //'long'
    day: 'numeric'
=======
const dt = new Date(2018, 9, 25);

console.log(dt.toLocaleDateString('fr-FR', {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
>>>>>>> 5ed6732bd4b952d32ca87f6372e9741459e3dadc
}));