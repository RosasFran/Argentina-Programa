// Lista de invitados

let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];

let invitados1 = ["Maria", "Juan", "Andres", "Lionel", "Leandro", "Emilia"];

let invitados2 = ["Jose", "Sofia"];

for(let i = 0; i < personas.length; i++){
    console.log(personas[i]);
}
// 2_ A)

let admitidos = ["Maria", "Juan", "Andres", "Lionel", "Leandro", "Emilia"];
let rechazados = ["Jose", "Sofia"];

rechazados.sort();
admitidos.sort();

let frase = "La lista de invitados admitidos es: ";


 for(let i = 0; i < admitidos.length; i++){
    frase +=admitidos[i] + " ";
}
console.log(frase);

// 2_ B)

let frase2 = "La lista de invitados rechazados es: ";

 for(let i = 0; i < rechazados.length; i++){
    frase2 +=rechazados[i] + " ";
}
console.log(frase2);
