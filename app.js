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
