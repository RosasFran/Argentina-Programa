const opciones = ["piedra", "papel", "tijeras"];

const readlineSync = require('readline-sync');

function obtenerJugadaComputadora(){
    let opciones = Math.floor(Math.random() * 3);
    return opciones;
}

function obtenerJugadaUsuario(){

    let seleccion = readlineSync.question("Selecciona (piedra, papel, tijeras) ");

    if (seleccion === "piedra" || seleccion === "papel" || seleccion === "tijeras") {
         return seleccion;
        }else{
            return "elija una de las opciones.";
        }
    }
    
/* Jueguemos Piedra, Papel, o Tijeras!!*/

// Reglas:
// * La Piedra vence a la Tijera!.
// * El Papel vence a la Piedra!.
// * La Tijera vence a al Papel!.
// * Si ambos jugadores seleccionan Piedra, Papel, o Tijeras, esto resultara en un empate!!        

function determinarGanador(obtenerJugadaUsuario, obtenerJugadaComputadora){
        
    if((obtenerJugadaComputadora === "piedra" && obtenerJugadaUsuario === "tijeras") || (obtenerJugadaComputadora === "papel" && obtenerJugadaUsuario === "piedra") || (obtenerJugadaComputadora === "tijeras" && obtenerJugadaUsuario === "papel")){
        console.log("El usuario elijio: " + obtenerJugadaComputadora + "." + " " + "La computadora elijio: " + obtenerJugadaUsuario + "." + " " + "El resultado fue: ");
                return "Gana el usuario";

    }else if((obtenerJugadaUsuario === "piedra" && obtenerJugadaComputadora === "tijeras") || (obtenerJugadaUsuario === "papel" && obtenerJugadaComputadora === "piedra") || (obtenerJugadaUsuario === "tijeras" && obtenerJugadaComputadora === "papel")){
        console.log("La computadora elijio: " + obtenerJugadaComputadora + "." + " " + "El usuario elijio: " + obtenerJugadaUsuario + "." + " " + "El resultado fue: ");
        return "Gana la computadora";
    }else{
        console.log("La computadora elijio: " + obtenerJugadaComputadora + "." + " " + "El usuario elijio: " + obtenerJugadaUsuario + "." + " " + "El resultado fue: ");
        return "Empate!";
    }
}

 console.log(obtenerJugadaComputadora());

 console.log(obtenerJugadaUsuario());

 console.log(determinarGanador("papel", "tijeras"));