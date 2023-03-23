/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt("Ingrese su nombre: ")
  let anio = 2023 - prompt("Ingrese su año de nacimiento: ")
  let ciudad = prompt ("Ingrese su Ciudad: ")
  let javaScript = confirm("¿Te gusta JavaScript?")

  datosPersona.nombre = nombre
  datosPersona.edad = anio
  datosPersona.ciudad = ciudad
  datosPersona.interesPorJs = javaScript
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.getElementById("nombre")
  nombre.innerText = datosPersona.nombre
  const edad = document.getElementById("edad")
  edad.innerText = datosPersona.edad
  const ciudad = document.getElementById("ciudad")
  ciudad.innerText = datosPersona.ciudad
  const java = document.getElementById("javascript")
  datosPersona.interesPorJs? java.innerText = "Sí" : java.innerText = "No" 
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const articulos = document.querySelector("#fila") 
    listado.forEach(materias => {
      articulos.innerHTML +=
        `<article class="caja">
        <img src="${materias.imgUrl}" alt= "${materias.lenguajes}">
        <p class="lenguajes"> ${materias.lenguajes}</p>
        <p class="bimestre"> ${materias.bimestre}</p>
        </article>`
        })
      materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
    }


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
      sitio.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keydown", function(e){
  if(e.key=="f"){
    let texto = document.getElementById("sobre-mi")
    texto.classList.remove("oculto")
  }
})

0170013840000006557782
