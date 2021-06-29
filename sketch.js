var bg;
var satellite, satelliteImg;
var rocket,rocketImg;
var ufo, ufoImg;
var asteroid,asteroidImg;
var start = 1;
var play = 2;
var gameState = start;
var obstaclesGroup;

function preload(){
  bg=loadImage("images/bg.jpg");
  satelliteImg=loadImage("images/satellite.png");
  rocketImg=loadImage("images/rocket.png");
  ufoImg=loadImage("images/ufo.png");
  asteroidImg=loadImage("images/asteroid.png");
} 

function setup() {
  createCanvas(displayWidth,displayHeight);

  rocket=createSprite(130,400,50,50);
  rocket.addImage(rocketImg);
  rocket.scale=0.26;
  
}

function draw() {
  background(bg);  

      if(keyIsDown(UP_ARROW)){
        rocket.y-=20;
      }
    obstaclesGroup = createGroup();
    if((obstaclesGroup.isTouching(rocket))){
       obstacles.destroy;
       gameState=end;
    }
  
 
  obstacles();
  drawSprites();
}
function obstacles(){
  if(frameCount%150===0){
    ufo=createSprite(1600,400,50,50);
    ufo.addImage(ufoImg);
    ufo.scale=0.5;
    ufo.velocityX=-10;
    ufo.x = Math.round(Math.random(-1000,2000));

    satellite=createSprite(1000,100,50,50);
    satellite.addImage(satelliteImg);
    satellite.scale=0.3;
    obstaclesGroup.add(ufo);
    
  }
}