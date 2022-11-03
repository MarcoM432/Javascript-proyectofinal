
let primer_numero = 0
let segundo_numero = 0
let resultado = 0
let peticion
let option

do {
alert(`Hola, bienvenido a mi primer desafio complementario, 
en este caso, el programa trata acerca de una pequena calculadora, vamos a empezar!`)

let option = prompt(`Elige que operacion matematica quieres ocupar?: 
1. Suma
2. Resta`)
switch (option){

    case "1":
        primer_numero = Number(prompt("Ingresa el primer numero: "))
        segundo_numero = Number(prompt("Ingresa el segundo numero: "))
        for (let i = 0; i<segundo_numero; i++){
            primer_numero+=1
            resultado = primer_numero
        }
        alert(`El resultado es: ${resultado}`)
        peticion = prompt(`Si quieres seguir pon si!, si ya quieres terminar, escribe esc!`)
    break;
    case "2":
        primer_numero = Number(prompt("Ingresa el primer numero: "))
        segundo_numero = Number(prompt("Ingresa el segundo numero: "))
        for (let i = 0; i<segundo_numero; i++){
            primer_numero-=1
            resultado = primer_numero
        }
        alert(`El resultado es: ${resultado}`)
        peticion = prompt(`Si quieres seguir pon si!, si ya quieres terminar, escribe esc!`)
    break;
}
} while (peticion != "esc")
