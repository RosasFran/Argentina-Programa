// 2_
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noivembre", "Diciembre"];

let cantidadDeDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31];
 
const readlineSync = require('readline-sync');
const numero = readlineSync.question("Elija un numero del 1 al 12: ");

if(mes = numero, cantidadDeDias) { 
    console.log("La cantidad de días del mes de %s es %i días", meses[mes -1], cantidadDeDias[mes -1]);
}else{
    console.log("No se pudo ejecutar el programa");
}