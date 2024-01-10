// you can write js here
console.log('hello from file');
// console.log(Math.floor(2.7));
// let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?")
let  kelvins = 294;
let celsius = kelvins - 273;
let fahrenheits = Math.floor(celsius * (9/5) + 32); // Je déclare la variable nommé farhenheights qui prend pour valeur le resultat de l'equation celsius * (9/5) + 32 (celsius représente la valeur de la variable celsius), arrondi a l'entier le plus proche
 console.log("celisus : " + celsius + " fahrenheits : " + fahrenheits );
