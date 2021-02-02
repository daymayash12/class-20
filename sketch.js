var movingrect
var fixedrect



function setup() {
  createCanvas(800,400);
  
 fixedrect = createSprite(400, 200, 100, 50);
 fixedrect.shapeColor = "green"
  movingrect = createSprite(100,100,50,100)
  movingrect.shapeColor = "green"
}

function draw() {
  background("lightblue");  

  movingrect.x = mouseX
  movingrect.y = mouseY


  if(fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 &&
    movingrect.y-fixedrect.y< fixedrect.height/2 + movingrect.height/2){


    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"
  }
  else {
    fixedrect.shapeColor = "green"
    movingrect.shapeColor = "green"

  }


  drawSprites();
}