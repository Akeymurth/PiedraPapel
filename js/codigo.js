function aleatorio(min, max){
    return Math.floor(Math.random() *(max - min + 1)+min)
};

let jugador
let pc
let resultado
let vidasJugador = 3;
let vidasEnemigo = 3;
let objetoJugador
let objetoPc 

const inputPiedra = document.getElementById ('piedra');
const inputPapel = document.getElementById ('papel');
const inputTijeras = document.getElementById ('tijeras');

const botonSeleccionar = document.getElementById ('botonSeleccionar');
botonSeleccionar.addEventListener ('click', seleccionarAtaque);

const sectionMensajes = document.getElementById ('nuevo-mensaje');

const sectionReiniciar = document.getElementById ('reiniciar');
sectionReiniciar.style.display = 'none';

function seleccionarAtaque (){    
    if(inputPiedra.checked){
        jugador = 1;
        objetoJugador = "Piedra 🌑";

        eleccionPc(); 
    } else if(inputPapel.checked){
        jugador = 2;
        objetoJugador = "Papel 📄";
        eleccionPc(); 
    } else if (inputTijeras.checked){
        jugador = 3;
        objetoJugador = "Tijera ✂"; 
        eleccionPc();
    } else {
        alert('Debes seleccionar para poder jugar');
    };
    console.log(jugador);  
       
};

function eleccionPc(){
    pc = aleatorio(1,3);
    if( pc == 1){
        objetoPc = "Piedra 🌑";
    } else if (pc == 2){
        objetoPc = "Papel 📄";
    } else if (pc == 3){
        objetoPc = "Tijera ✂";
    };
    console.log(pc);
    combate();   
};

function combate(){
    const spanVidasJugador = document.getElementById ('vidas-jugador');
    const spanVidasEnemigo = document.getElementById ('vidas-enemigo');

    if (pc == jugador){
        resultado = "Empataste 😫";
    } else if (pc == 1 && jugador == 2 || pc == 2 && jugador == 3 || pc == 3 && jugador == 1){
        resultado = "Ganaste 😬";
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }else {
        resultado = "Perdiste 😟";
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    };
    console.log(resultado);
    crearMensaje();
    revisarVidas();
};

function crearMensaje(){
    const ataquesDelJugador = document.getElementById ('ataques-del-jugador');
    const ataquesDelEnemigo = document.getElementById ('ataques-del-enemigo');

    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');
    
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = objetoJugador;
    nuevoAtaqueDelEnemigo.innerHTML = objetoPc;
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);  
};

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('- Ganaste la partida 🤗🎉🎊');
    } else if(vidasJugador == 0){
        crearMensajeFinal('- Perdiste la partida 😭');
    };
};

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal;
    
    botonSeleccionar.disabled = true;

    sectionReiniciar.style.display = 'block';
};

const botonReiniciar = document.getElementById ('boton-reiniciar');
botonReiniciar.addEventListener('click', reiniciarJuego);

function reiniciarJuego(){
    location.reload();
};