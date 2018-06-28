// JavaScript source code
let personnes = {
    profs: [
<<<<<<< HEAD
        { nom: 'Solo', prenom: 'Han' },
        { nom: 'Bacca', prenom: 'Chew' }
    ],
    eleves: [
        { nom: 'McFly', prenom: 'Marty' },
        { nom: 'Brown', prenom: 'Doc' }
=======
        { prenom: 'Han', nom: 'Solo' },
        { prenom: 'Chew', nom: 'Bacca' }
    ],
    eleves: [
        { prenom: 'Marty', nom: 'McFly' },
        { prenom: 'Doc', nom: 'Brown' }
>>>>>>> 5ed6732bd4b952d32ca87f6372e9741459e3dadc
    ]
};

console.log(personnes['eleves'][0]['prenom']);
console.log(personnes.eleves[0].prenom);