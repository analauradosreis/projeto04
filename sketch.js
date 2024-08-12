let imagem;
    let musica;
function setup() {
  createCanvas(400, 400);
  palavra = McKevin();
  musica.loop();
}
function preload(){
  imagem = loadImage("imagem.png");
  musica = loadSound("musica.mp3");
}

function draw() {
  background("violet");
 image = (imagem,0,0,1000,800);
  Isac();
  Ana();
  McKevin()

}

function Isac (){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400);
}

function Ana(){
   fill("lightblue");
  textSize(60);
  textAlign(CENTER,CENTER);
}

function McKevin(){
  let palavras = [ "Fé em Deus","Esquece","cocóricó","O pai ta estourado"];
  return random(palavras);
    
}