let nom = "ADOKOU";
let prenom ="Afi Jeannine";
let nombre1 = 12;
let nombre2 = 20;
let nombre3 = nombre1 + nombre2 ;
let age = nombre3;
let baseDeDonne = ["Jean", "Léo", "Ophélie", "Martin" , "Jacob"]
// let userAge = prompt()
let couleur = prompt ("Quelle est votre couleur préferez; choisissez entre rouge, vert et jaune")

// console.log (nombre3);
// console.log ("Bonjour je m'appelle " + prenom + " " + nom + " je suis agé de " + "ans.")
// console.log( "Votre age est " + userAge + "ans")

for(let i=0; i<9; i++){
    console.log("jour - " + i)
}

switch (couleur){
    case "Rouge": 
    alert("Vous devez vous arreter")
    break;
    case "Vert":
    alert ("vous pouvez passer")
    case "Jaune": 
    alert("vous devez ralenti")
    default: 
        break;
}


// if(userAge >= 1 && userAge <=10){
//     console.log("Vous etes un enfant ")
//     alert("Vous etes un enfant ")
// } else if( userAge > 10 && userAge <= 17) {
//      console.log("vous etes un adolescent")
//      alert("vous etes un adolescent")
// } else if( userAge > 17 && userAge <= 40 ){
// console.log("vous etes un adulte")
// alert("vous etes un adulte")
// }else {
// console.log("vous etes un senior"); 
// alert("vous etes un senior")
// }