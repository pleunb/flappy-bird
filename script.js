class Pillar {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }
  
  drawPillar() {
    fill("green")
    rect(this.x, this.y, 50, this.h);
    this.x = this.x - 5;
  }
}

class Bird{
  constructor(xpos, ypos, yspeed){
    this.xpos = xpos;
    this.ypos = ypos;
    this.yspeed = yspeed;
  }

  drawBird(){
    fill("yellow");
    ellipse(100, 300, -5);
  }
}
var [xpos, ypos, yspeed] = [100, 300, 5];

//pillars
var pillars = [];

function setup() {
	createCanvas(800, 600);
}

function draw() {
  background(225);

  drawBird;

  if(frameCount % 60 == 0){   
    let randomHeight = random(height - 150)

    pillars.push(new Pillar(800,0, randomHeight));
    pillars.push(new Pillar(800,randomHeight + 150, 1000));
  }

  pillars.forEach(p => p.drawPillar());

  
  fill("yellow");
	ellipse(xpos, ypos, 30, 30);
	if(ypos >= 0 && ypos + 25 <= 600) ypos += yspeed;
  else ypos = 300;
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