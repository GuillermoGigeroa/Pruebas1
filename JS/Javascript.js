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