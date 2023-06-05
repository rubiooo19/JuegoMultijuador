let main = document.getElementsByTagName('main')[0];
main.classList.add('container');

let Numerofilas = 9;
let Numerocolumnas = 9;
let div;

let objetivo = [Math.floor(Math.random()*9), Math.floor(Math.random()*9)];
let j1 = [Math.floor(Math.random()*9), Math.floor(Math.random()*9)];
let j2 = [Math.floor(Math.random()*9), Math.floor(Math.random()*9)];

document.addEventListener('load', inicio());

function inicio() {
    let div;
    let objetivo = [Math.floor(Math.random()*9), Math.floor(Math.random()*9)];
    let j1 = [Math.floor(Math.random()*9), Math.floor(Math.random()*9)];
    let j2 = [Math.floor(Math.random()*9), Math.floor(Math.random()*9)];
    for (let i = 0; i < Numerofilas; i++) {
        for (let j = 0; j < Numerocolumnas; j++) {
            div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);
            main.appendChild(div);

            if(i == objetivo[0] && j == objetivo[1]){
              div.classList.add('objetivo');
              }
            if(i == j1[0] && j == j1[1]){
              div.classList.add('j1');
            }
            if(i == j2[0] && j == j2[1]){
              div.classList.add('j2');
            }

        }
    }
}

document.addEventListener('keydown', mover);

function mover(event) {
 
    let ahora, idAhora, despues, idDespues, fila, columna;
    switch (event['key']) {
        case 'w':
            
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) - 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 's':
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) + 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 'a':
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) - 1}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 'd':
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) + 1}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 'ArrowUp':
            ahora = document.getElementsByClassName('j2')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) - 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        case 'ArrowRight':
            ahora = document.getElementsByClassName('j2')[0];
            
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) + 1}`;
            console.log(idDespues)
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        case 'ArrowDown':
            ahora = document.getElementsByClassName('j2')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) + 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        case 'ArrowLeft':
            ahora = document.getElementsByClassName('j2')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) - 1}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        default:

            
    }
}


let contador1 = 0;
let contador2 = 0;
let victorias1 = 0;
let victorias2 = 0;

function ganar(){
    
    j1 = document.getElementsByClassName('j1')[0];
    j2 = document.getElementsByClassName('j2')[0];
   
    if(j1.classList.contains('objetivo')){
        victorias1++;
        actualizarContador();
        document.removeEventListener('keydown', mover);
       
    }else if(j2.classList.contains('objetivo')){
        victorias2++;
        actualizarContador();
        document.removeEventListener('keydown', mover);
    }
}

function actualizarContador() {
    contador1 = document.getElementById('contador1');
    contador2 = document.getElementById('contador2');
    contador1.textContent = `Jugador Rojo :  ${victorias1}`;
    contador2.textContent = `Jugador Azul:  ${victorias2}`;
}


function reiniciarPartida(){
    main.textContent = "";
    inicio()
    document.addEventListener('keydown', mover);;
}
