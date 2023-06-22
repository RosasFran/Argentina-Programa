// 1_

// A)
const readlineSync = require("readline-sync");
const nombre = readlineSync.question("Cual es tu edad?: ");

if (nombre >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}




