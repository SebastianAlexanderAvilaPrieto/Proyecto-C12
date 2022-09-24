// Variables
var path, boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
  // Carga de Animación e Imágenes
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png") 
}


function setup(){
  // Sprites y adhesión de Imágenes y Animaciones
  createCanvas(400,400);
  path = createSprite(200, 200, 1, 400);
  path.addImage("path1", pathImg);
  path.scale = 1.2;
  
  boy = createSprite(200, 340, 1, 1);
  boy.addAnimation("running", boyImg);
  boy.scale=0.6;
  

  // Borde izquierdo y derecho
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}


function draw() {
  background("green");

  // Velocidad a path
  path.velocityY = 4;

  // Boy.x es igual a mouseX
  boy.x = mouseX
  
  // Bordes y Colisiones
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // Reinicio de camino
  if(path.y > 400 ){
    path.y = height/4;
  }

  drawSprites();
}
