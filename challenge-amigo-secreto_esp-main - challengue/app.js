// Lista para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar un nombre de la lista
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No estes solo, al menos dos personas para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${nombreSorteado}</strong>! 🎁</p>`;
}
