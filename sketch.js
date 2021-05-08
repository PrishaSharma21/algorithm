var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,300,60,75)
  
  movingRect=createSprite(400,200,70,50)
}

function draw() {
  background("blue");
  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green"
    }
    else{
      movingRect.shapeColor="red"
    
      fixedRect.shapeColor="yellow"
    }

  drawSprites();
  
}