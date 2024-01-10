// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop(); // retire le dernier element du tableau
secretMessage.push("to"); // ajoute l'ement en fin de tableau
secretMessage.push("program");

// const isEasily = (element) => element == "easily";
// let easilyKey = secretMessage.findIndex(isEasily);
// secretMessage[easilyKey] = "right";

const index=secretMessage.indexOf('easily'); // trouver l'index qui correspond a la valuer easily et le stocker dans la constante index

secretMessage[index]='right'; // remplace la valeur de l'index dans secret message par right

console.log(secretMessage);

secretMessage.shift(); // retire le premier element du tableau secretMessage
secretMessage.unshift("Programming") // ajoute "programming au début du tableau secretMessage"
secretMessage.splice(5,5 ,"know") // a partie de l'index 5, 5 supprime 5 elements et ajoute "know" a partir de l'index 5

// console.log(secretMessage.join(' '));
