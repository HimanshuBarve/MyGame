var ground
var playerS,playerK
var computer 
var goal
var gk,gkS,gkLeft,gkRight,gkDown,gkUp
var arrow,arrowS,arrowL,arrowR
var gameState=0;

 function preload(){
 groundImg=loadImage("Images/ground.png");
 goalImg=loadImage("Images/Goal.png")
 ballImg=loadImage("Images/ball.jpg")
playerSImg=loadImage("Images/k.png")
playerKImg=loadImage("Images/kick.png")
gkS=loadAnimation("Images/gk.png")
gkLeft=loadAnimation("Images/gktl.png","Images/gkl.png")
gkRight=loadAnimation("Images/gktr.png","Images/gkr.png")
gkup=loadAnimation("Images/gkup.png")
arrowS=loadAnimation("Images/left.png","Images/left.png","Images/left.png","Images/left.png","Images/up.jpg","Images/up.jpg","Images/up.jpg","Images/up.jpg","Images/up.jpg","Images/right.png","Images/right.png","Images/right.png","Images/right.png")
arrowL=loadAnimation("Images/left.png")
arrowR=loadAnimation("Images/right.png")
arrowU=loadAnimation("Images/up.jpg")


 }
 function setup(){
 createCanvas(1200,1200)    
 ground=createSprite(600,600,800,1200)    
 ground.addImage("groundImg",groundImg)
 ground.scale=1.5

 goal=createSprite(600,70,50,50)
 goal.addImage("goalImg",goalImg)
 goal.scale=0.35

 ball=createSprite(600,600,10,10)
ball.addImage("ballImg",ballImg)
ball.scale=0.55
 
playerS=createSprite(560,670,40,40)
playerS.addImage("playerSImg",playerSImg)
playerS.addImage("playerKImg",playerKImg)
playerS.scale=0.50

gk=createSprite(600,125,40,40)
gk.addAnimation("gkS",gkS)

arrow=createSprite(600,550,30,10)
arrow.addAnimation("arrowS",arrowS) 
arrow.addAnimation("arrowU",arrowU)
arrow.addAnimation("arrowR",arrowR)
arrow.addAnimation("arrowL",arrowL)
  
}


 function draw(){
background(0)     ;
if(gameState===0){
    arrow.changeAnimation("arrowS",arrowS)   
    if(keyDown("SPACE")){
        gameState=1;
    }    
}
else if(gameState===1){
    if(keyDown("UP_ARROW")){
        arrow.changeAnimation("arrowU",arrowU)
        playerS.changeImage("playerKImg",playerKImg)
        ball.velocityX=0
        ball.velocityY=-3
    }
    else if(keyDown("LEFT_ARROW")){
        arrow.changeAnimation("arrowL",arrowL)
        //addImage and Velocity 
        playerS.changeImage("PlayerKImg",playerKImg)
        ball.velocityX=random(-1,-0.1)
        ball.velocityY=-4
    }
    else if(keyDown("RIGHT_ARROW")){
        arrow.changeAnimation("arrowR",arrowR)
        //AddImage and Velocity 
        playerS.changeImage("PlayerKImg",playerKImg)
        ball.velocityX=random(0.3,1)
        ball.velocityY=-4
    }
    
}
console.log(gameState)
drawSprites()    ;
}
    
 