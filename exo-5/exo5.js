// you can write js here

console.log('exo-5');
let input = "phrase de test";
let letters = input.split("");
let vowels =  ["a", "e", "i", "o", "u", "y"];
let resultArray = [];

// letters.forEach(elmt=> {
//     if(vowels.indexOf(elmt) >= 0){
//         resultArray.push(elmt)
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

