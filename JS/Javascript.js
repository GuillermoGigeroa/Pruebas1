const velocidad = 15; //Velocidad en píxeles de la animación
const minPixels = 1; //Mínimo de píxeles de distancia antes del contacto
const boxBorder = 3; //Borde en píxeles de la caja interior
var pos = 0; //Variable utilizada para administrar la posición
var derecha; //Controlador de intervalo en animación derecha
var izquierda; //Controlador de intervalo en animación izquierda

function largoCaja(nombre){
    let caja = document.getElementById(nombre);
    let largo = caja.clientWidth;
    return largo;
};

function animarDerecha(){
    pararTodo();
    derecha = setInterval(moverDerecha,1);
    if(!moverDerecha){
        pararTodo();
    }
};

function moverDerecha(){
    pos += velocidad;
    if(pos > largoCaja("outsideBox")-largoCaja("insideBox")-boxBorder*2-minPixels){
        pos = largoCaja("outsideBox")-largoCaja("insideBox")-boxBorder*2-minPixels;
        mover();
        return false;
    }
    mover();
    return true;
};

function animarIzquierda(){
    pararTodo();
    izquierda = setInterval(moverIzquierda,1);
    if(!moverIzquierda){
        pararTodo();
    }
};

function moverIzquierda(){
    pos -= velocidad;
    if (pos < minPixels){
        pos = minPixels;
        mover();
        return false;
    }
    mover();
    return true;
};

function mover(){
    let cajaInterior = document.getElementById("insideBox");
    cajaInterior.style.left = pos+"px";
};

function pararTodo(){
    clearInterval(izquierda);
    clearInterval(derecha);
};

function encenderRojo(){
    encenderLuz("luzRoja_animada","red");
    apagarLuz("luzAmarilla_animada");
    apagarLuz("luzVerde_animada");
};

function encenderAmarillo(){
    encenderLuz("luzAmarilla_animada","yellow");
    apagarLuz("luzRoja_animada");
    apagarLuz("luzVerde_animada");
};

function encenderVerde(){
    encenderLuz("luzVerde_animada","green");
    apagarLuz("luzAmarilla_animada");
    apagarLuz("luzRoja_animada");
};

function encenderLuz(id_luz,color){
    let luz = document.getElementById(id_luz);
    luz.style.backgroundColor = color;
};

function apagarLuz(id_luz){
    let luz = document.getElementById(id_luz);
    luz.style.backgroundColor = "rgb(20, 20, 20)";
};

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = activarSemaforo;

function activarSemaforo(){
    let luces = 0;
    luces = numeroRandom(0,3);
    switch (luces){
        case 0:
            {encenderRojo();luces++;}
            break;
        case 1:
            {encenderAmarillo();luces++;}
            break;
        case 2:
            {encenderVerde();luces++;}
            break;
        default:
            {}
            break;
    }
};