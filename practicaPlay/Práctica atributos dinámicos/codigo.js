
//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
function agregandoClase() {
    const clase = document.querySelector("#tarjeta")
    clase.classList.add("card")
}
agregandoClase()


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
function agragandoImagen() {
    const img = document.getElementById("logo")
    img.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png")
}
agragandoImagen()

//3- Quitarle al titulo la clase que le está dando un formato feo
function sacarClase(){
    const titulo = document.querySelector("h1")
    titulo.classList.remove("titulo-feo")
}
sacarClase()

//4- Chequear si el link a youtube posee o no el atributo href
function tieneHref(){
    const link = document.querySelector("#link_wikipedia")
    console.log(link);
    link.getAttribute("href")

}
console.log(tieneHref()); 

//5- Obtener el href del link a wikipedia y mostrarlo por consola

