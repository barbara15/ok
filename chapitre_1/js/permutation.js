var nombre1 = 5;
var nombre2 = 3;

var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

console.log(nombre1); //doit afficher 3
console.log(nombre2); //doit afficher 5