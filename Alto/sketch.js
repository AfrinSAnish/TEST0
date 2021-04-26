var player,bgImg;
var gameState = "level1";
var bg0,bg1,bg2,balloonImg;
var medi;

function preload(){
  playerImg = loadImage("images/man.png")
  bg0 = loadImage("images/bgg.jpg")
  bg1 = loadImage("images/bg1.jpg")
  bg2 = loadImage("images/bg2.jpg")
  balloonImg = loadImage("images/balloon.png")
  medImg = loadAnimation("images/plant.png","images/plant1.png")
  enemImg1 = loadAnimation("images/eagle1.png","images/eagle2.png","images/eagle3.png",
  "images/eagle4.png","images/eagle5.png","images/eagle6.png","images/eagle7.png",
  "images/eagle8.png","images/eagle9.png","images/eagle10.png")
  starImg = loadAnimation("images/star.png","images/Black.png")
}

function setup() {
  createCanvas(1200,700);

  man = createSprite(0,345,50,50);
  man.addImage(playerImg)
  man.scale = 0.5;

  balloon = createSprite(0,200,50,50);
  balloon.addImage("hi",balloonImg)
  balloon.scale=1.75;

  
  
  //fill("#c54a6b")
 // ground = createSprite(-550,690,0,20)
 // ground.width = (man.x)*1000;
}
   

function draw() {
  background(0);
 // background.velocityX=1;

 if(gameState==="level1"){
    image(bg0,displayWidth-1900,0,displayWidth*8,displayHeight)
  }

  if(gameState==="level2"){
    image(bg1,displayWidth-1900,0,displayWidth*8,displayHeight)
  }

  spawnEnem();
  spawnMed();

     medi = createSprite(man.x+700,450,30,30)
     medi.addAnimation("medical",medImg)
     medi.scale=100;
     medi.x = man.x+300
     console.log("HI")
     medi.visible = false;

  if(keyDown("Left_Arrow")){
    man.x = man.x-10
    balloon.x = balloon.x - 10
  } else if(keyDown("Right_Arrow")){
    man.x = man.x+10
    balloon.x = balloon.x+10;
  } else if(keyDown("Up_Arrow")){
    man.y = man.y-10;
    balloon.y = balloon.y-10
  } else if(keyDown("Down_Arrow")){
    man.y = man.y+10;
    balloon.y = balloon.y+10
  }
  
    camera.position.x = man.x

    if(man.x === 9000){
      gameState="level2"
    }

  drawSprites();
 // console.log(man.x)
}

function spawnMed(){
    if(frameCount%100===0){
       medi.visible=true;
        console.log("HI")

     if(frameCount%2===0){
       var star = createSprite(medi.x-Math.round(random(-1,10)),medi.y-Math.round(random(-1,10)),30,30);
       star.addAnimation("plink",starImg);
       star.scale = 0.1
        }
  }
}
  //}

function spawnEnem(){
  if(frameCount%400===0){
   var enem = createSprite(man.x+700,450,30,30)
   if(gameState==="level1"){
     enem.addAnimation("fly",enemImg1)
     enem.scale=2;
     enem.x = man.x+300
   }else if(gameState==="level2"){
    // enem.addAnimation
   }
  }


}