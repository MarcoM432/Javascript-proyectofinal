// Ecommerce de venta de nendoroids (figuras coleccionables)

//Empezare con el entregable con algo sencillo, la intencion del ecommerce, es que los clientes puedan abrir su cuenta.


//Apertura de cuenta.


//Inicialiacion donde se van a almacenar los datos de los clientes
const clientes = new Array(10000)

class Clientes { // En esta clase se almacenaran los distintos clientes con sus datos 
    contructor (nombreNuevo,correoNuevo,passwordNuevo,direccionNuevo){ // Se utilizo una clase para poder ingresar clientes de forma mas facil
        this.nombre = nombreNuevo; // Componentes de la clase 
        this.correo = correoNuevo;
        this.password = passwordNuevo;
        this.direccion = direccionNuevo
    }
}
//Creacion del cliente

clientes.append = new Clientes(prompt("nombre"),prompt("correo"),prompt("password"),(prompt("direccion")))// se registra un cliente con ayuda de la clase


// Articulos dentro del eccomerce 

document.addEventListener('DOMContentLoaded', () => { //Haciendo los productos dentro de una base de datos 

    const Productos = [  // Solo se agregaron unos productos y ciertas caracteristicas 
        {
            id: 10001,
            NombreProducto: 'Naruto Sage Mode',
            Precio: 1300,
        },
        {
            id: 10002,
            NombreProducto: 'itachi akatsuki',
            Precio: 1450,
        },
        {
            id: 10003,
            NombreProducto: 'Sasuke MS',
            Precio: 1400,
        }
    ];

    //Variables del carrito (vaciado, items, sacar el total)
    let carrito = []
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
})


// Vaciado del carrito 




// Utilizacion de herencia de clases para poder registrar todos los productos
// Y a la vez poder registrar caracteristicas diferentes que tengan entre ellos

//Inicio de Sesion

let correoProvisional = prompt("correo")
let passwordProvisional = prompt("password")

// Librerias (aun no se adhiere al HTML)
// <button id="CrearUsuario"> Crear Cuenta</button>
// En el html <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
// <script src="app.js"></script>

const btn = document.querySelector('#CrearUsuario')
btn.addEventListener('click', () =>{
    Swal.fire({
        title: 'Haz creado tu cuenta satisfactoriamente',
        text: 'Podras guardar tu carrito de ahora en adelante en tu cuenta',
        icon: 'success',
        timer: 2500
    })
})


//listado de los productos desde el servidor

fetch('/data.json')
.then ( (res) => res.json())
.then( (data) =>{

    data.forEach ( (producto) =>{
    const li = document.createElement('li')
    li.innerHTML = `
         <h4>${producto.nombre}</h4>
         <p>${producto.precio}</p>
         <p>Codigo: ${producto.id}</p>
         <hr/>
         `
         lista.append(li))
})