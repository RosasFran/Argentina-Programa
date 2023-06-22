//3_

// A)
let var1 = 12;
let var2 = 10;
let var3 = 14;
let var4 = 16;

// B)
let var5 = var1 + var2;
console.log(var5); 


// c)
let var6 = var4 - var3;
console.log(var6);

// D)
let resultadoFinal = var5 * var6;
console.log(resultadoFinal);

//E)
let calc = resultadoFinal % 2;
let esPar = calc === 0;
console.log(esPar);

//F)
console.log("Mis variables iniciales fueron :" , + var1, + var2, + var3, + var4, "." + " La respuesta a verificar si el resultado final es par es:" + " " + esPar.toString());
