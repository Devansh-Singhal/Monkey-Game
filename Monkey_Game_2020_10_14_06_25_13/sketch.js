var monkey, monkeyani;
var banana, bananaimg,bananagrp, obstacle, obstacleimg;
var obstaclegrp;
var ground, gorundimg;
var score;
var invi1;
var survtime;
var score=0;

function preload() {
  monkeyani = loadAnimation("sprite_0.png", "sprite_1.png",
    "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bananaimg = loadImage("banana.png");
  obstacleimg = loadImage("obstacle.png");
  groundimg = loadImage("ground.png");
}

function setup() {
  createCanvas(800, 440);

  ground = createSprite(350, 220);
  invi1 = createSprite(400, 390, 800, 20);
  monkey = createSprite(50, 350, 30, 30);
bananagrp= createGroup();
  obstaclegrp=createGroup();

  monkey.addAnimation("monkey", monkeyani);
  ground.addImage("ground", groundimg);
  ground.velocityX = -4;

  monkey.scale = 0.1;
  ground.scale = 0.6;

invi1.visible=false;
}

function draw() {
  background("white");
  //  invi1.visible=false;
  monkey.collide(invi1);
  //monkey.collide(obstaclegrp);

  if (ground.x < 200) {
    ground.x = 400;
  }
  
  if(bananagrp.isTouching(monkey))
    {
      score=score+2;
      monkey.scale=monkey.scale+0.025;
      bananagrp.destroyEach();
    }
  
if(obstaclegrp.isTouching(monkey))
  {
    score=score-3;
   monkey.scale=monkey.scale=0.1;
    obstaclegrp.destroyEach();
  }
  switch(score){
    case 10:player.scale=0.12;
      break;
         case 20:player.scale=0.14;
      break;
         case 30:player.scale=0.16;
      break;
         case 40:player.scale=0.18;
      break;
         case 50:player.scale=0.20;
      break;
      default:break;
      
  }
  console.log(monkey.y);
  if (keyDown("space") && monkey.y>300) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 1;
spawnbanana()
  spawnobstacle()
  drawSprites();
  survtime=frameCount;
  textSize(20);
  fill("black");
  text("Survival Time:"+survtime,570,20);
  text("Score:"+score,570,40)
  textSize(20);
  fill("red");
  text(mouseX + "," + mouseY, mouseX, mouseY);
}

function spawnbanana() {
  if (frameCount % 80 == 0) {
    banana = createSprite(740, 100, 30, 30);
    banana.addImage("banana", bananaimg);
banana.velocityX=-5;
    banana.scale = 0.1;
      banana.y = Math.round(random(215,280));
    bananagrp.lifetime=150;
    bananagrp.add(banana);
  }
}
function spawnobstacle(){
if(frameCount % 200==0){
  obstacle=createSprite(740,360,50,50);
  obstacle.addImage("obstacle",obstacleimg);
  obstacle.velocityX=-5;
  obstacle.scale=0.1;
  obstaclegrp.add(obstacle);
  obstaclegrp.lifetime=150;
  }
}