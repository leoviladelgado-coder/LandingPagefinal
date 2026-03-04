const botonAbrirMenu = document.querySelector('.header-menu')
const headerNavegacion = document.querySelector('.header-navegacion')
const botonCerrarMenu = document.querySelector('.cerrar-menu')


botonAbrirMenu.addEventListener('click', function(){
  headerNavegacion.classList.toggle('menu')
})

botonCerrarMenu.addEventListener('click', function(){
  headerNavegacion.classList.toggle('menu')
})


// efecto de tipeo
const elementoEfectoTipeo = document.querySelector('.efectoTipeo')

let text = 'Haz que tu interior sea mas minimalista y moderno'


let indice = 0

function tipea(){
  if(indice<text.length){
    elementoEfectoTipeo.textContent = elementoEfectoTipeo.textContent + text.charAt(indice)

    indice++

    setTimeout(tipea, 80);

  }
}


tipea()

//CARRUSEL
const imagenes = [
  "imagenes/image-experiencias.webp",
  "https://m.media-amazon.com/images/I/61rCLxjhykL._AC_SY300_SX300_QL70_FMwebp_.jpg",
  "https://m.media-amazon.com/images/I/719+XG8f1CL._AC_SX679_.jpg"
]

const botonSiguiente = document.querySelector('.boton-siguiente')
const botonAnterior = document.querySelector('.boton-anterior')
const imagen = document.querySelector('.imagen-carrusel')

let imagenActual = 0

botonAnterior.addEventListener('click', function() {

  imagenActual = imagenActual - 1

  if (imagenActual <= -1) {
    imagenActual = imagenes.length - 1
  }

  imagen.src = imagenes[imagenActual]

})

botonSiguiente.addEventListener('click', function() {

  imagenActual = imagenActual + 1

  if (imagenActual > imagenes.length - 1) {
    imagenActual = 0
  }

  imagen.src = imagenes[imagenActual]

})


// formulario
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactanos');


  const name = document.getElementById('contact-name');
  const errorName = document.getElementById('error-name')

  const email = document.getElementById('contact-email')
  const errorEmail = document.getElementById('error-email')
  
  
  
  function esCorreoInvalido(email) {
        return email.indexOf('@') === -1 || email.indexOf('.') === -1;
  }


  form.addEventListener('submit', function(e){
    let valid = true;

    if(!name.value.trim()){
      errorName.textContent = 'El nombre es requerido'
      valid = false
    } else if (name.value.trim().length<3){
      errorName.textContent = 'El nombre debe tener al menos 3 caracteres'
      valid = false
    } else if (name.value.trim().length>50) {
      errorName.textContent = 'El nombre no debe exceder de 50 caracteres'
      valid = false
   } else {
    errorName.textContent = ''
   }

   if(!email.value.trim()){
      errorEmail.textContent = 'El correo es requerido'
      valid = false;
    }else if(esCorreoInvalido(email.value)){
      errorEmail.textContent = 'Ingresa un correo valido'
      valid = false;
    } else {
      errorEmail.textContent = '';
    }




    if(!valid){
    e.preventDefault()
    }
  })


})