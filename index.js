//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
    createCanvas (600, 400);
}

function draw() {
    background (0);
    mostraBolinha();
    movimentoBolinha();
    verificaColisaoBorda();
}

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