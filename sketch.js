var x = 280;
var sunRadius = 25;
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('header');
}

function draw() {
  background(232, 0, 77);
  fill(255, 253, 0);
  noStroke();
  ellipse(x,120,100,100);
  x = x + 0.1 ;
	noStroke();
	fill(61, 18, 4);
	rect(260, 240, 80, 150);
	noStroke()
	fill(0, 54, 0);
	ellipse(300, 200, 125, 125);
	noStroke();
  fill(61, 18, 4);
  rect(50, 240, 80, 150);
  noStroke();
  fill(0, 54, 0);
  ellipse(90, 200, 125, 125);
  noStroke();
  fill(0, 54, 0);
  rect(55, 155, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(40, 140, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(30, 155, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(45, 165, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(265, 155, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(240, 155, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(250, 140, 95, 95);
  noStroke();
  fill(0, 54, 0);
  rect(255, 165, 95, 95);
  textSize(50);
  fill(83,0, 118);
  text("Laura", 150, 60);
  text("Rossi", 150, 125);
  console.log(mouseX, mouseY);
  
  if(x>width+sunRadius)
  {
    x= -sunRadius;
  }
  
}