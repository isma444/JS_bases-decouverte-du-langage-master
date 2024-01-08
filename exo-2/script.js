// you can write js here
console.log('exo-2');
let myDate;

let isTesting = true;



if(isTesting == true){
    
    myDate = new Date(prompt("entrez une date"))

}else{
    myDate = new Date();
}

let messageSemaine = "C'est un jour de semaine";
let messageWeekend = "C'est le weekend";
let day = myDate.getDay();
let hour = myDate.getHours();
let message ;

if(day == 0 || day == 6 ){
    message = messageWeekend;

}else if(day == 1 && hour < 9){

    console.log('yo');
    message = messageWeekend;

}else if(day == 5 && hour <= 17){

    message = messageWeekend;

}else{

    message = messageSemaine;
}

console.log(message);

