
let div = document.getElementById('mostrar-jugada');
let img_piedra = document.getElementById('piedra');
let img_papel = document.getElementById('papel');
let img_tijera = document.getElementById('tijera');

img_papel.addEventListener('click', jugar);
img_piedra.addEventListener('click', jugar);
img_tijera.addEventListener('click', jugar);

function jugar() { 

    let arregloJugadas = 
    [img_papel, img_piedra, img_tijera];

    let indice_aleatorio = Math.floor(Math.random() * arregloJugadas.length); 

    div.innerHTML = "";
    div.style.width = "80px";
    div.style.height = "80px";
    div.style.margin = "10px";

    div.appendChild(arregloJugadas[indice_aleatorio].cloneNode(true)); 
}
