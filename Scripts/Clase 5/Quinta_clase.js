const nombre = "Teclado";
const precio = 300;
const disponible = true;

const producto = {
    nombre: "Teclado",
    precio: 300,
    disponible: true
}

delete producto.disponible 

console.log(producto);

function producto1 (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new producto1 ("Monitor",2000);



let cadena = "Hola Coder"

console.log(cadena.toUpperCase)

function Cliente(nombre, edad, domicilio){
    this.nombre = nombre
    this.edad = edad
    this.domicilio = domicilio
    this.saludar = function (){
        console.log("Saludos"+" "+this.nombre);
    }
}

const cliente1 = new Cliente("coder", 26, "Publica")
const cliente2 = new Cliente("House", 35, "manzana")

cliente1.saludar()
cliente2.saludar()


class Clientes {
    constructor (nombre,acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
}

const coderhouse1  = new Clientes("coder","accepted")
console.log(coderhouse1);


class Usuario{
    constructor(nombre, acceso){
    this.nombre = nombre
    this.acceso = acceso

    }
    mostrarInfoUsuario(){
        return `Usuario: ${this.nombre}, tu acceso es ${this.acceso}`
    }

}

const coderhouse2 = new Usuario("Coder","Accepted")
console.log(Usuario.nombre,Usuario.mostrarInfoUsuario())