var block;
var cloud;
var jumper;
var man;  
var cap;
var bg;

var  bg_img,block_img ,cloud_img ,jumper_img ,man_img, cap_img;

function preload () {

block_img = loadImage ("Images/block.jpg");
cloud_img = loadImage ("Images/cloud2.png");
jumper_img = loadImage ("Images/jumper.png");
man_img = loadImage ("Images/flying man.png");
cap_img = loadImage ("Images/flying cap.png");
//bg_img=loadImage ("Images/background.jpg")
}

function setup() {
createCanvas(1200,800)



//cloud = createSprite(200,100,30,40);
//cloud.addImage(cloud_img)
man = createSprite(800,600,100,80)
man.addImage(man_img)

//bg=createSprite(0,600,2000,1200)
//bg.addImage(bg_img);
//bg.velocityY=2;
}

function draw() {
  background("white");  
if (keyDown("space")){
man.velocityY=-13
}
man.velocityY=man.velocityY+0.3 
man.x=mouseX
spawnClouds();
  drawSprites();
}
function spawnClouds() {
  if (frameCount%60===0){

  cloud=createSprite(600,600,30,40);
  cloud.addImage(cloud_img);
  cloud . velocity=1
  cloud.scale=0.5
  //cloud.lifetime=800;
  cloud.y=random(200,700);
}
}



