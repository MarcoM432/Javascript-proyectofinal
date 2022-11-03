let food = prompt("Que se te antoja cenar?")


switch (food){
    case "hamburguesa":
        console.log(`Pedido: ${food}, valor 1000`)
        break;
    case "pizza":
        console.log(`Pedido: ${food}, valor 1200`)
        break;
    case "lomo":
        console.log(`Pedido: ${food}, valor 900`)
    break;
    default:
        console.log("Hoy no pedimos cena")
    break;
}


let option = prompt(`Elija una opcion de pelicula:
1.Batman
2.Superman
3.Spiderman
4.Moonfall`);

switch (option) {
    case "1":
        console.log("Batman")
        break;
    case "2":
        console.log("Superman")
        break;
    case "3":
        console.log("Spiderman")
        break;
    case "4":
        console.log("Moonfall")
        break;
    default:
        console.log("No ingresaste una opcion valida")
        break;
}

//While 

let x = 0

while (x <=10){
    console.log(`El valor de X es: ${x}`)
    x++;

}

let entrada = prompt("Ingrese un texto o ESC para interrumpir");
let texto = " "

while(entrada != "ESC" && entrada !="esc"){
    texto += entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
}
alert(texto)


// do while 

let y=0

do{
    console.log(`Valor de Y, es: ${y}`)
    y++
} while (y <=10);

let z = 20
do{
    console.log(z)
    z++
} while (z<=30)


for (let i =1; i <=10; i++){
    let resultado = numero * 1;
    alert(`${numero} x ${i} = ${resultado}`)
}


for (let i = 1; i <= 10; i++){
    if (i === 6){
        break;
    }
    alert (`El valor de I es ${i}`);
}

for (let i = 0;i <=10; i++){
    if (i === 6){
        continue;
    }
    alert(`El valor de I es ${i}`)
}