alert(`Bienvenido al CoderBank!`)
alert(`En este banco puedes crear una cuenta, depositar, retirar, pagar servicios, eliminar la cuenta, tramitar tarjeta de credito`)
let reinicio = 0
const Clientes = new Array(100)
for (let i=0;i<100;i++){
    Clientes[i]=0
}
do{
let option = prompt(`Elige la opcion que quisieras realizar: 
1. Crear cuenta
2. Depositar a cuenta existente
3. Retirar de cuenta existente
4. Pagar un servicio
5. Tramitar tarjeta de credito
6. Eliminar la cuenta`);





switch(option){
    case "1":
        let ClienteNuevo = prompt("Introduce tu usuario para crear tu cuenta")
        let PasswordNueva = prompt("Introduce el password para tu cuenta")

        const Cliente = {
            nombre: "vacio",
            password: "vacio",
            monto: 0
        }
        Cliente.nombre = ClienteNuevo
        Cliente.password = PasswordNueva
        
        for (let i=0; i<100; i++){
            if (Clientes[i] === 0 ){
                Clientes[i] = Cliente
                break;
            }
        }
          alert(`Creaste tu cuenta correctamente! con el nombre de cliente: ${Cliente.nombre} y Password: ${Cliente.password}`)
          let alerta1 = prompt(`Quieres realizar otra accion?
          1. si
          2. no`)

          switch(alerta1){
            case "1":
                reinicio = 1
            break;
            case "2":
                reinicio = 0
            break;
            default:
               alert("Respuesta incorrecta") 
            break;
        }
    break;
    case "2":
        let case2 = prompt(`Ya tienes cuenta en el banco?
        1. Si
        2. No`)
       
        break;
    case "3":
       
    break;
    case "4":
        
    break;
    case "5":
        
    break;
    case "6":
       
    break;
    case "7":
       
    break;
    default:
        
    break;
}
 } while(reinicio === 1);

 