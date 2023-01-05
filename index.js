//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeOponente = 6;

let colidiu = false;


function setup() {
    createCanvas (600, 400);
}

function draw() {
    background (0);
    mostraBolinha();
    movimentoBolinha();
    verificaColisaoBorda();
    mostrarRaquete(xRaquete, yRaquete);
    movimentoRaquete();
    verificaColisaoRaquete(xRaquete,yRaquete,yRaquete);
    mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
    verificaColisaoRaquete();
    movimentaRaqueteOponente();
   // verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente, yRaqueteOponente);
}

//funcoes da bolinha
function mostraBolinha () {
    circle (xBolinha, yBolinha, diametro);
}

function movimentoBolinha () {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda () {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
        }//colisao de X
    if (yBolinha + raio > height || 
        yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
        }//colisao de Y
}

//funcoes da raquete
function mostrarRaquete(x,y){
    rect (x, y, comprimentoRaquete, alturaRaquete);
}

function movimentoRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete -= -10;
    }
}

function verificaColisaoRaquete(x,y,w){
    if (xBolinha - raio < x + comprimentoRaquete && 
        yBolinha - raio < y + alturaRaquete &&
        yBolinha + raio > w){
            velocidadeXBolinha *= -1;
        }
}

function colisaoRaqueteBiblioteca(x, y){
    colidiu = collideRectCircle
}

function movimentaRaqueteOponente(){
    velocidadeOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
    yRaqueteOponente += velocidadeOponente;
}