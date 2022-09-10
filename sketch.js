var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullet, bulletGroup;
var zombie1, zombieImg, zombieGroup;
var play = 1
var end = 0
var gameState = play;
var lifebar, lifebarImg, lifebarImg2;
var end1

//var edges = []
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  bulletImg = loadImage("assets/bullet.png")

  zombieImg = loadImage("assets/zombie.png")

  lifebarImg = loadImage("assets/heart_2.png")
  lifebarImg2 = loadImage("assets/heart_1.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

zombieGroup = new Group()
bulletGroup = new Group()
  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
lifebar = createSprite(100,100)
lifebar.addImage("lb1", lifebarImg)
lifebar.addImage("lb2", lifebarImg2)
lifebar.scale = 0.3;


//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.6
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  edges = createEdgeSprites()
if (gameState === play){
 background(0); 


//lifebar.addImage(lifebarImg2)


if(zombieGroup.isTouching(player)){
  lifebar.changeImage("lb2",lifebarImg2)
  gameState = end1;
  zombieGroup.destroyEach()
}

  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
  zombie()
  if(keyWentDown("space")){
    bullet = createSprite(player.x, player.y)
    bullet.addImage(bulletImg)
    bullet.scale = 0.1;
    bullet.velocityX = 5;
     player.addImage(shooter_shooting)
     bulletGroup.add(bullet)
   }
   else if(keyWentUp("space")){
    player.addImage(shooterImg)
}
if (bulletGroup.isTouching(zombieGroup)){
  // zombieGroup.destroyEach()
  for (i=0;i<zombieGroup.length;i++){
    //console.log(zombieGroup.get(i))
    zombieGroup.get(i).destroy()
  }

}
//if (zombieGroup.isTouching(player)){
 // gameState = end;
//}
if (zombieGroup.isTouching(edges[0])){
  gameState = end;
}

  //moving the player up and down and making the game mobile compatible using touches



//release bullets and change the image of shooter to shooting position when space is pressed


//player goes back to original standing image once we stop pressing the space bar

  //player.addImage( shooter_shooting )
 // player.addImage()
 // player.addImage(shooterImg)
 //player.addImage("shooter_1.png")




}


else if(gameState === end1){  
  background(0)
  console.log("end1")

  
  
  
  
  if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
zombie()
if(keyWentDown("space")){
  bullet = createSprite(player.x, player.y)
  bullet.addImage(bulletImg)
  bullet.scale = 0.1;
  bullet.velocityX = 5;
   player.addImage(shooter_shooting)
   bulletGroup.add(bullet)
 }
 else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if (bulletGroup.isTouching(zombieGroup)){
// zombieGroup.destroyEach()
for (i=0;i<zombieGroup.length;i++){
  //console.log(zombieGroup.get(i))
  zombieGroup.get(i).destroy()
}

}
if (zombieGroup.isTouching(player)){
gameState = end;
}
if (zombieGroup.isTouching(edges[0])){
gameState = end;
}

//moving the player up and down and making the game mobile compatible using touches



//release bullets and change the image of shooter to shooting position when space is pressed


//player goes back to original standing image once we stop pressing the space bar

//player.addImage( shooter_shooting )
// player.addImage()
// player.addImage(shooterImg)
//player.addImage("shooter_1.png")

}


else if (gameState === end){
  background("red")
  textSize(50)
  text("You Lost", 500, 500)
zombieGroup.destroyEach()
lifebar.destroy()
  console.log("hello")
  bg.destroy()
}
drawSprites();
}

function zombie(){
if (frameCount % 145 === 0 ){
  zombie1 = createSprite(windowWidth+100, random(windowHeight - 100, windowHeight - 500))
zombie1.velocityX = -5;
zombie1.addImage(zombieImg)
zombie1.scale = 0.2
zombieGroup.add(zombie1)
}

}