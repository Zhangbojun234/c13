var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacles1, obstacles2, obstacles3, obstacles4, obstacles5, obstacles6
var allobstacles
var cloud, cloudsGroup, cloudImage;
var score = 0


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  obstacles1 = loadImage("obstacle1.png")
  obstacles2 = loadImage("obstacle2.png")
  obstacles3 = loadImage("obstacle3.png")
  obstacles4 = loadImage("obstacle4.png")
  obstacles5 = loadImage("obstacle5.png")
  obstacles6 = loadImage("obstacle6.png")
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello " + 2)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  //obstacles
  obstacles()

  //score
  text("score: " + score, 500, 50)
  score = score + Math.round(frameCount / 60)

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 210
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function obstacles(){
  if(frameCount % 60 === 0)
  {
  allobstacles = createSprite(600, 165, 10, 40)
  allobstacles.velocityX = -5
  var i = Math.round(random(1, 6))
  switch(i){
    case 1:
      allobstacles.addImage(obstacles1)
      break;
    case 2:
      allobstacles.addImage(obstacles2)
      break;
    case 3:
      allobstacles.addImage(obstacles3)
      break;
    case 4:
      allobstacles.addImage(obstacles4)
      break;
    case 5:
      allobstacles.addImage(obstacles5)
      break;
    case 6:
      allobstacles.addImage(obstacles6)
      break;
    default:
      break;
  }
  allobstacles.scale = 0.5
  allobstacles.lifetime = 115
  }
}

