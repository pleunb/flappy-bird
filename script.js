class Pipe {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }
  
  drawPipe() {
    fill("green")
    rect(this.x, this.y, 30, this.h);
    this.x = this.x - 5;
  }
}

// Bird
var [xpos, ypos, yspeed] = [100, 300, 5];


//pillars
var pipes = [];

function setup() {
	createCanvas(300, 600);
}

function draw() {
  background(225);


  if(frameCount % 120 == 0){   
    console.log("draw pipe!");

    let randomHeight = random(height - 150)

    pipes.push(new Pipe(800,0, randomHeight));
    pipes.push(new Pipe(800,randomHeight + 150, 1000));
  }

  pipes.forEach(p => p.drawPipe());

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