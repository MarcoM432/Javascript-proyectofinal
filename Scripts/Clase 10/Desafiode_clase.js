let MensajeDeUsuario = prompt("Introduce tu nombre: ")
localStorage.setItem ( "info", MensajeDeUsuario)

const usuario = new Array(100)

class Usuarios{
    constructor (nombre,producto){
        this.nombre = nombre;
        this.producto = producto
    }

}

usuario.append = new Usuarios(Marco,Xbox)

const usuario = JSON.stringify