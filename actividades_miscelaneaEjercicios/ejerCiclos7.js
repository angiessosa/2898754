console.log("7. Sumar todos los números que se digitan por teclado mientras no sea cero, digite 0 para terminar el ciclo");
let suma=0;
let num;
do{
    num=parseInt(prompt("Ingrese un número: "));
    suma=suma+num;
}while (num!==0);
console.log("La suma de los números ingresados es: ",suma);
