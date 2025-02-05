//Declarar array que almacena amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
  
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return; // Detener la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Mostrar los amigos en la lista (actualizar la interfaz)
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
  }

//funcion para actualizar lista amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    //Limpiar lista actual
    lista.innerHTML = ""; 

//Recorrer el array de amigos y a;adir cada nombre a la lista
amigos.forEach((amigo) => {
const li = document.createElement('li');
li.textContent = amigo;
lista.appendChild(li);
})


}
