console.log("6. Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos: ");
console.log("Ingrese el primer número: ");
let numA=15;
console.log("Ingrese el segundo número: ");
let numB=-38;


if(numA<0 || numB<0){
    let resultado=(numA+numB);
    console.log("El resultado de la suma entre los dos números es: ",resultado);
}else{
    let resultado=(numA*numB);
    console.log("El resultado de la multiplicación entre los dos números es: ",resultado);
}