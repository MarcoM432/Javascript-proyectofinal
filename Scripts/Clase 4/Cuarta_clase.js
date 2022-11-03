function solicitarNombre(){
    let nombre = prompt("Ingrese su nombre")
    console.log(`El nombre del usuario es: ${nombre}`);
}

solicitarNombre();


function sumar(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
    return resultado;
}

console.log(sumar(4,5));

let numero1 =prompt("Introduce el primer numero");
let numero2 =prompt("Introduce el segundo numero");

function SumaPorelUsuario(){
    numero
}


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jorge", "cortez")


let primeroNumero1 = 0
let Segundonumero1 = 0
function calculadora(primeroNumero1, Segundonumero1, operacion){
    switch(operacion){
        case "+":
            return primeroNumero1 + Segundonumero1
            break;
        case "-":
            return primeroNumero1 - Segundonumero1
            break;
        case "*":
            return primeroNumero1 * Segundonumero1
            break;
        case "/":
            return primeroNumero1 / Segundonumero1
            break;
        default:
            return 0
            break;
    }
}

console.log(calculadora(30, 50, "+"))



//Scope o ambito de las variables 


function crearMensaje(){
    let mensaje = "Mensaje de prueba";
}

console.log(mensaje);

iniciarApp()

function iniciarApp(){
    console.log("iniciando app");

    segundaFuncion()
}

function segundaFuncion(){
    console.log("desde la segunda funcion");

    usuarioAutenticado()
}

function usuarioAutenticado(usuario){
    console.log("autenticando usuario... espere");
    console.log("usuario autenticado");
}


// Funcion dentro de una variable

const aprendiendo = function (){
    console.log("aprendiendo");
}
const aprendiendo2 = () => {
    return "aprendiendo Js"
}

console.log(aprendiendo);