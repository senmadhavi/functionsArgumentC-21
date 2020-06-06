var fixedRect, movingRect,go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  go1 = createSprite(300, 100, 50, 50);
  go1.shapeColor = "yellow";
  go2 = createSprite(200, 100, 50, 50);
  go2.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go2)){
    movingRect.shapeColor = "red";
    go2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    go2.shapeColor = "yellow";
  }

  
  drawSprites();
}

