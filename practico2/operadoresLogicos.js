// 3_

const readlineSync = require('readline-sync');
let numero = readlineSync.question("Elije un numero: ");

if(numero <= -1){
    console.log("El numero es negativo");
}else if(numero %2 == 0){
    console.log("El numero es positivo y par");
}else if(numero %2 !== 0 ){
    console.log("El numero es positivo e impar");
}else{
    console.log("El numeor es cero");
}
