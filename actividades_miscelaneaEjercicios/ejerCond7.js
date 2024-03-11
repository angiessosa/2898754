console.log("7. Escribir un algoritmo que determine si un año es bisiesto o no: ");
console.log("Digite el año que desee: ");
let year = 2024;

// si es divisible entre 4 y no divisible entre 100, y también si es divisible entre 400.
//verifica si un año es divisible por 4 pero no por 100.
//% es como un MOD que deja el residuo de la división.
// = (igualdad estricta)

if ((year%4==0 && year%100!=0) || year%400==0) {
    console.log("El año ",year," es un año bisiesto.");
} else {
    console.log("El año ",year," no es un año bisiesto.");
}
