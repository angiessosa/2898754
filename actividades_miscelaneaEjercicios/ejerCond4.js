console.log("4. Dados dos números A y B, sumarlos si A es menor que B o sino restarlos: ");
console.log("Ingrese el primer número declarado A: ");
let numA=65;
console.log("Ingrese el segundo número declarado B: ");
let numB=48;


if(numA<numB){
    let resultado=(numA+numB);
    console.log("El resultado de la suma es de: ",resultado);
}else if(numA==numB){
    console.log("La operación no es posible ya que los dos números son del mismo valor");
}else{
    let resultado=(numA-numB);
    console.log("El resultado de la resta es de: ",resultado);
}
