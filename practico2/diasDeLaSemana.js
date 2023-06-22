// 4

const readlineSync = require('readline-sync');
let numero = readlineSync.question("Elije un numero del 1 al 7: ");

switch (numero){
    case "1":
        diasDeLaSemana = "Hoy es Lunes";
        break;
    case "2":
        diasDeLaSemana = "Hoy es Martes";
        break;
    case "3":
        diasDeLaSemana = "Hoy es Miercoles";
        break; 
    case "4":
        diasDeLaSemana = "Hoy es Jueves";
        break;
    case "5":
        diasDeLaSemana = "Hoy es Viernes";
        break;
    case "6":
        diasDeLaSemana = "Hoy es Sabado";
        break;  
    case "7":
        diasDeLaSemana = "Hoy es Domingo";
        break;
    case "<=8":
        default:
        diasDeLaSemana = ("Numero invalido");
        break;    
}
console.log(diasDeLaSemana);