var jump = false;
var gravity = 2;



function setup() {
	createCanvas(300, 600);
}

var [xpos, ypos, xspeed, yspeed] = [100, 300, 5, 5];

function draw() {
	background(225);
	
	fill(0, 150, 0);
	ellipse(xpos, ypos, 30, 30);
	
  //ypos = ypos + 5
	if(ypos >= 0 && ypos + 50 <= 600) ypos += yspeed;
}

function keyPressed() {
	switch(keyCode) {
    case 32:
      jump = true;
			yspeed = -10;
			break;
		case 40:
		case 83:
			yspeed = 2;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
    case 32:
      jump = false;
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
	}
}

function gravity(){
  ypos = ypos + (gravity);
}  


