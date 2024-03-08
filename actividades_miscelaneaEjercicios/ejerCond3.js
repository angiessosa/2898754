console.log("3. Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos: ");
console.log("Ingrese el primer número: ");
let num1=3;
console.log("Ingrese el segundo número: ");
let num2=31;
console.log("Ingrese el tercer número: ");
let num3=510;

function encontrarMinMax(num1, num2, num3){
    let min=Math.min(num1,num2,num3);
    let max=Math.max(num1,num2,num3);
    return{min, max};
}


if(num1>=0 && num2>=0 && num3>=0){
    const {min, max}=encontrarMinMax(num1,num2,num3);
    console.log("El número menor es: ",min);
    console.log("El número mayor es: ",max);
}else{
    console.log("Asegurese de que digito números positivos y no negativos");
}
