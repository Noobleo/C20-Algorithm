var A;
var B;




function setup() {
  createCanvas(800,400);
   A = createSprite(400, 200, 50, 50);
   B = createSprite(400, 300, 50, 50);
   A.shapeColor = "green"
  B.shapeColor = "green"

}

function draw() {
  background(0);  

B.y = World.mouseY
B.x = World.mouseX

if( A.x - B.x < A.width/2 + B.width/2
  && B.x - A.x < A.width/2 + B.width/2
  && A.y - B.y < A.height/2 + B.height/2
  && B.y - A.y < A.height/2 + B.height/2
) {
A.shapeColor = "red"
B.shapeColor = "red"
}
else{
  A.shapeColor = "green"
  B.shapeColor = "green"
}



  drawSprites();
}