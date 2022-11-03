document.getElementById("title").innerHTML = "<h1> Interactuando con DOM </h1>" // Cambiando el contenido del div mediante dom
document.getElementById("title").style.color = "blue" // Cambiando el estilo del div mediante DOM

let div = document.createElement("div") // Introduciendo a una variable el nuevo elemento de html
div.innerHTML = "<h1>Creando elementos con DOM</h1>" // estableciendo el contenido del nuevo elemento
document.body.append(div) // adjuntando al dom el nuevo elemento en el body 

let div2 = document.createElement("div") // Creando otro elemento para eliminarlo mediante dom
div2.innerHTML = "<h1> Elemento para eliminar</h1>"
document.body.append(div2)
div2.remove() // removiendo el nodo

//Creando una aplicacion de estas funciones (Generacion de paginas dinamicas)

let title = document.createElement("div")
title.innerHTML = "<h1> El numero de tus productos es el siguiente: "
document.body.append(title)
Dato = prompt("Introduce el numero de tus productos: ")
console.log(Dato);
const productos = new Array(Dato)
for (const conteo in Dato){
    productos[conteo] = `Producto ${conteo}`
}
console.log(productos);
for ( const lista in Dato){
    let li = document.createElement("li")
    li.innerHTML = productos[lista]
    title.append(li)
}