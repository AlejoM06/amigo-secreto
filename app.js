//Declarar array que almacena amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final
  
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

//funcion para sortear un amigo
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear");
    return; // Detener la ejecución si el array está vacío
  }
  
  //Math.random(); // Por ejemplo, genera 0.75
//Math.random() * amigos.length; // Si amigos.length = 3, genera 2.25
//Math.floor(2.25); // Redondea hacia abajo, obteniendo 2

  //generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  //obtener el nombre sorteado usando el índice aleatorio
  const amigoSorteado = amigos[indiceAleatorio];

  //mostrar el resultado en la interfaz
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}
