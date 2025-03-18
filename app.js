// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        input.value = "";
        lista();
    }
}

function lista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (const i of amigos) {
        let li = document.createElement('li');
        li.textContent = i;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    if (amigos.length === 0) {
        alert("Primero inserte amigos.");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indice];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSeleccionado}</li>`;
    }
}