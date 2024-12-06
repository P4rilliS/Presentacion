// script.js
const palabras = ["Electricidad", "Refrigeracion", "Computacion", "Plomeria","Mecanica","Linea Blanca", "Fumigacion"];
let index = 0;

function cambiarPalabra() {
    const palabraElement = document.getElementById("palabra");
    palabraElement.textContent = palabras[index];
    index = (index + 1) % palabras.length;
}

setInterval(cambiarPalabra, 1000);


// script.js 
function toggleMenu() { 
    const seleccion = document.getElementById('menu-invisible'); 
    const iniciar_sesion = document.getElementById('btn-iniciar-sesion'); 
    if (seleccion.style.display === 'block') { 
        seleccion.style.display = 'none';
        iniciar_sesion.style.display = 'none';
    } else { 
        seleccion.style.display = 'block';
        iniciar_sesion.style.display = 'block'; 
    }
}
