var ball 
function setup() {
  createCanvas(600,400);
  ball = createSprite(200,200,30,30)
}

function draw() 
{
  background(30);

if (keyDown('right')) {
  ball.x = ball.x + 1
}
  



drawSprites()
}




