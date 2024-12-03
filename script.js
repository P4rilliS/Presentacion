// script.js
const palabras = ["Electricidad", "Refrigeracion", "Computacion", "Plomeria","Mecanica","Linea Blanca", "Fumigacion"];
let index = 0;

function cambiarPalabra() {
    const palabraElement = document.getElementById("palabra");
    palabraElement.textContent = palabras[index];
    index = (index + 1) % palabras.length;
}

setInterval(cambiarPalabra, 1000);
