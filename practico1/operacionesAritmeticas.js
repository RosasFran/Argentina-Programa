//3

// A)
var var1 = 12;
var var2 = 10;
var var3 = 14;
var var4 = 16;

// B)
var var5 = var1 + var2;
console.log(var5); 


// c)
var var6 = var4 - var3;
console.log(var6);

// D)
var resultadoFinal = var5 * var6;
console.log(resultadoFinal);

//E)
var calc = resultadoFinal % 2;
var esPar = calc === 0;
console.log(esPar);

//F)
console.log("Mis variables iniciales fueron :" , + var1, + var2, + var3, + var4, "." + " La respuesta a verificar si el resultado final es par es:" + " " + esPar.toString());
