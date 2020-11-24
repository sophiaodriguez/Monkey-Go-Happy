
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 200);  

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  console.log(ground.x);
  
  
}


function draw() {

  
  if(gameState === PLAY){
    
    text("Score: "+ score, 500,50);
    ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
    if(score>0 && score%100 === 0){
      
    }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8

    if(obstacleGroup.isTouching(monkey)){
        gameState = END;
    }
    
  }
  drawSprites();
}






