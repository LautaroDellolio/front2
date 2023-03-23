//punto 1
const datosPersona = []
function agregarPersona() {
    let datos= {}
    let nombre = prompt("Ingrese su nombre: ")
    let anio = 2023 - prompt("Ingrese su año de nacimiento: ")
    let ciudad = prompt ("Ingrese su Ciudad: ")
    let javaScript = confirm("¿Te gusta JavaScript?")

    datos.nombre = nombre
    datos.edad = anio
    datos.ciudad = ciudad
    datos.javaScript = javaScript
    
    datosPersona.push(datos)
    
    let agregar = confirm("Desea agregar otra persona?") 
    if(agregar){
        agregarPersona()
    }    
}
agregarPersona()
console.log(datosPersona)
