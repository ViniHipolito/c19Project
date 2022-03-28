var PLAY=1;
var END=0;
var gameState = PLAY;

var kitty;
var invi,invi2;
var kittyImg,kittyImg2,kittyImg3;
var OST;
var EnemyK, EnemyG, EnemyImg;
var city, cityImg;
var Sun, SunImg;

function preload(){
  
kittyImg = loadImage("Kitty.png");
kittyImg2 = loadImage("Kitty2.png");
kittyImg3 = loadImage("Lucke.png");
EnemyImg = loadImage("Evil.png");
//cityImg = loadImage("Map3.png");
cityImg = loadImage("Map2.png");
SunImg = loadImage("Sun.png");
OST = loadSound("ost.mp3");

}



function setup() {
  createCanvas(1000, 300);

  Sun = createSprite(500,50,20,20);
  Sun.addImage(SunImg);
  Sun.scale = 0.35;

  city = createSprite(1000,150,20,20);
  city.addImage(cityImg);
  city.scale = 2
  city.velocityX = -3;

  invi = createSprite(500,15,1000,200);
  invi.visible = false;

   kitty = createSprite(70,200,20,20);
   kitty.addImage(kittyImg2);
   kitty.addImage(kittyImg3);
   kitty.addImage(kittyImg);
   kitty.scale = 0.15;

   EnemyG=new Group();

  OST.loop(); 
}

function draw() {
  background("lightblue");

  EnemySpawner();

  kitty.y = World.mouseY;
  //kitty.x = World.mouseX;

  edges= createEdgeSprites();
  kitty.collide(edges);
  kitty.collide(invi);

  if(city.x < -25 ){
    city.x = width/1;
  }

  /*if (keyDown("Down_Arrow")) {
  kitty.changeImage(kittyImg2);
} */
/*if (keyDown("space")) {
  kitty.changeImage(kittyImg2);
}
else {
  kitty.changeImage(kittyImg);
} 
 if (keyDown("Right_Arrow")) {
  kitty.changeImage("LuckeMoment", kittyImg3);
} */
if (EnemyG.isTouching(kitty)){
 gameState = END;
  OST.pause();
}
else if (gameState === END){
  //EnemyK.visible = false;
  EnemyG.setVelocityXEach(5000);
  kitty.visible = false;
  city.velocityX = 0;
  city.visible = false;
  Sun.visible = false;
}
textSize(30);
fill("red");
text("Game Over!",300,150);
  drawSprites();

}

function EnemySpawner(){
  if (World.frameCount % 175 == 0) {
    var EnemyK = createSprite(1000,Math.round(random(150, 250), 10, 10));
    EnemyK.addImage(EnemyImg);
    EnemyK.scale = 0.2;
    EnemyK.velocityX = -7;
    EnemyK.lifetime = 150;
    EnemyG.add(EnemyK);
    }
} 
