// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms)
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage)


let team = {
    players : [
        {
        firstName : "Pablo",
        lastName: "Sanchez",
        age : 11,
    }
    ],

    games :[{
        oppponent: "Broncos",
        teamPoint:42,
        opponentPoint:27,
    }],

    addPlayer(firstName, lastName, age){
        this.players.push(
        {
            firstName : firstName, 
            lastName : lastName,
            age : age,
        }
        )
            
    },
    addGames(opponent, teamPoint, opponentPoint){
        this.games.push(
        {
            opponent : opponent, 
            teamPoint : teamPoint,
            opponentPoint : opponentPoint,
        }
        )
            
    },
    sumPoint(){
        let result = 0;
        this.games.forEach(element => {
            result += element.teamPoint;
        });
        return result;
    },
    overageOpponent(){
        let addPoint = 0 ;
        this.games.forEach(element => {
            addPoint += element.opponentPoint;
        });
        let result = addPoint/this.games.length;
        return result;
    },

    oldestPlayer(){
        
        this.players.sort(function (a, b){
            return b.age - a.age;
        })
        return this.players[0];
       
    },

    sortPlayers(){

        this.players.sort(function (a, b){
            if(a.firstName < b.firstName){
                return -1;
            }
            if(a.firstName > b.firstName){
                return 1;
            }
        })
        return this.players;
        
    }
}

