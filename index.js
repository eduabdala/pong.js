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

function setup() {
    createCanvas (600, 400);
}

function draw() {
    background (0);
    mostraBolinha();
    movimentoBolinha();
    verificaColisaoBorda();
    mostrarRaquete();
    movimentoRaquete();
    verificaColisaoRaquete();
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
function mostrarRaquete(){
    rect (xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function movimentoRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete -= -10;
    }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + comprimentoRaquete && 
        yBolinha - raio < yRaquete + alturaRaquete &&
        yBolinha + raio > yRaquete){
            velocidadeXBolinha *= -1;
        }
}