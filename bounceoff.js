var fixedRect,movingRect;

function setup() {

  createCanvas(800,800);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=+1;
  movingRect=createSprite(400,200,90,90);
  movingRect.shapeColor="green";
  movingRect.velocityX=-1;
}

function draw() {
  background("black");
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX=movingRect.velocityX*(-1) ;

    }
  else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }
  drawSprites();
}