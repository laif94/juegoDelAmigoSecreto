// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//VARIABLES

let listaDeAmigos = [];
let listaHTML = document.getElementById('listaAmigos');
//FUNCIONES

//Cambiar texto de resultado según parámetro.
function cambiarTexto(nuevoTexto) {
    let listaAmigos = document.getElementById('resultado');
    listaAmigos.textContent = nuevoTexto;
}

//Agregar un amigo a la lista y mostrar la lista actualizada.
function agregarAmigo() {
   let valorUsuario = document.getElementById('amigo').value;
   let nombreUsuario = valorUsuario.trim(); // Se eliminan espacios antes y después del texto
   // Se capitaliza la primera letra del nombre
   nombreUsuario = nombreUsuario.toLowerCase().charAt(0).toUpperCase() + nombreUsuario.toLowerCase().slice(1);

   //Validación de valor vacío
   if (nombreUsuario != '') {
      if(listaDeAmigos.includes(nombreUsuario)) {
         alert('No se permiten nombres repetidos');
      } else {
         listaDeAmigos.push(nombreUsuario); //Registro del nombre en el array
         document.getElementById('amigo').value = '';
         mostrarAmigos();
      }
   } else {
      alert('Por favor, ingrese un nombre');
   }
   console.log(nombreUsuario);
   console.log(listaDeAmigos);
}

function mostrarAmigos() {
   
   //Limpiar estante
   listaHTML.innerHTML = '';

   //recorrer el array listaDeAmigos 
   for (let i = 0; i < listaDeAmigos.length; ++i) {
      //En cada vuelta crear un libro nuevo
      let amigoItem = document.createElement('li');

      //Escribir el nombre del amigo en el libro
      amigoItem.textContent = listaDeAmigos[i];

      //Colocar texto en el estante
      listaHTML.appendChild(amigoItem);
   }
}


function sortearAmigo() {
   let indiceAleatorio = 0;
   if (listaDeAmigos.length < 2) {
      alert('Ingrese al menos 2 nombres en la lista ');
   } else {
      indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
   }
   console.log(indiceAleatorio)
   listaHTML.innerHTML = '';
   cambiarTexto(`El ganador es ${listaDeAmigos[indiceAleatorio]}`)
}
//<h2 class="section-title">Digite el nombre de sus amigos</h2>
//    <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
//    <ul id="resultado" class="result-list" aria-live="polite"></ul>