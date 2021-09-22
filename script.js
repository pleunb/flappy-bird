var jump = false;
var gravity = 2;

// pillar
var b1X = 200;
var b1Y = 400;
var b1Width = 30;
var b1Height = 300;
var xspeed = -5

// pillar 2
var b2X = 200;
var b2Y = -100;
var b2Width = 30;
var b2Height = 300;
var xspeed = -5

function setup() {
	createCanvas(300, 600);
}

var [xpos, ypos, xspeed, yspeed] = [100, 300, 5, 5];

function draw() {
	background(225);
	
	fill("pink");
	ellipse(xpos, ypos, 30, 30);

 	fill("blue"); 
  rect(b1X, b1Y, b1Width, b1Height);
	rect(b2X, b2Y, b2Width, b2Height);
  //ypos = ypos + 5
	if(ypos >= 0 && ypos + 25 <= 600) ypos += yspeed;
}

function keyPressed() {
	switch(keyCode) {
    case 32:
      jump = true;
			yspeed = -10;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
    case 32:
      jump = false;
			yspeed = 5;
			break;
	}
}

function gravity(){
  ypos = ypos + (gravity);
}  