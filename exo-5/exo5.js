// you can write js here

console.log('exo-5');
let input = "phrase de test";
let letters = input.split("");
let vowels =  ["a", "e", "i", "o", "u", "y"];
let resultArray = [];

// letters.forEach(elmt=> { // pour chaque element de letters
//     if(vowels.indexOf(elmt) >= 0){ // si l'index de l'element rechercher et isuperieur ou egal a 0 , indexOf retourn -1 sipas trouver
//         resultArray.push(elmt) //on ajoute a resultArray
//     } 
    
// });

letters.forEach(elmt=> {
    vowels.forEach(e =>{
        if(elmt == e){
            resultArray.push(elmt);
        }
    })
    
});

console.log(resultArray.join("").toLocaleUpperCase());

