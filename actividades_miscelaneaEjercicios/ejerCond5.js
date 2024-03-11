console.log("5. Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es posible: ");
console.log("Ingrese el primer número: ");
let numA=15;
console.log("Ingrese el segundo número: ");
let numB=3;


if(numA!==0 && numB!==0){
    let resultado=(numA/numB);
    console.log("El cociente entre ",numA," y ",numB," es: ",resultado);
}else{
    console.log("La división no es posible ya que alguno de los dos números es igual a cero");
}