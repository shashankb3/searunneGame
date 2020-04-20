 var invisibleGround;
  var canvas;
var sea,seaImage,boat,boatImage,enemyGroup,gameover,gameoverimage
var enemy1,enemy2,enemy3,enemy4;
var gameState =1;
function preload(){
  seaImage = loadImage("../images/sea1.jpg");
  boatImage = loadImage("../images/submarine.png");
  enemy1=loadImage("../images/enemy 1.jpg");
  enemy2=loadImage("../images/enemy2.jpg");
  enemy3=loadImage("../images/enemy 3.jpg");
  enemy4=loadImage("../images/enemy 4.jpg");
  enemy5=loadImage("../images/enemy 5.jpg");
  gameoverimage=loadImage("../images/enemy 5.jpg");
}


function setup(){
  canvas = createCanvas(1250,600);

  sea=createSprite(700,350);
  sea.addImage("sea",seaImage)
  sea.x=sea.width/2
  sea.velocityX=-6
  console.log (sea.width)
 boat=createSprite(100,350)
  boat.addImage("boat",boatImage)
  boat.scale=0.5;

  invisibleGround=createSprite(700,580,1400,20);
  invisibleGround.visible=false

  enemyGroup=new Group()
}


function draw(){
  background ("blue")

  if(gameState===1){
    if(keyDown("space")){
      boat.velocityY=-12
    }
    boat.velocityY=boat.velocityY+0.5;

    if (sea.x<310){
      sea.x=sea.width/2
    }
    spawnEnemies()

    if(enemyGroup.isTouching(boat)){
      gameState=0
    }
    

  }
  else if (gameState===0){
    sea.velocityX=0
    boat.velocityY=0
    enemyGroup.setVelocityXEach(0)
     gameover=createSprite(200,200)
     gameover.addImage(gameoverimage)
  }
  
  boat.collide(invisibleGround) 

  drawSprites()
}

function spawnEnemies(){
  if(frameCount%60===0){
    var enemy=createSprite(1400,300,40,10)
    enemy.velocityX=-6
    enemy.scale=0.3
    enemy.y=Math.round(random(100,500));
    var rand=Math.round(random(1,5))
    switch (rand) {
       case 1: enemy.addImage(enemy1)
        break;
       case 2: enemy.addImage(enemy2)
        break;
       case 4: enemy.addImage(enemy4)
        break;
       case 3: enemy.addImage(enemy3)
        break;
       case 5: enemy.addImage(enemy5)
        break;
        
    
      default:
        break;
    }
    enemyGroup.add(enemy)
  }
}