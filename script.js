class Pillar{
  
  constructor (x, y, w, h, vx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
  }
  
  draw() {
    rect(this.x, this.y, 30, 300)
    this.x = this.x + this.vx
  } 
}

// Bird
var [xpos, ypos, xspeed, yspeed] = [100, 300, 5, 5];

//pillars
var pillar1, pillar2;


function setup() {
	createCanvas(300, 600);

  pillar1 = new Pillar(300, 400, 30, 300, -2);
  pillar2 = new Pillar(300, -100, 30, 300, -2);
}

function draw() {
	background(225);
  color('')

 	fill("blue"); 
  pillar1.draw();
  pillar2.draw();

  fill("pink");
	ellipse(xpos, ypos, 30, 30);
  
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

if (this.x < 100){
    this.x = 300
}