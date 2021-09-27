var y;
var velocity;
var acceleration;
var gravity;



function setup() {
  y = 100;
  velocity = 0;
  acceleration = 0;

  gravity = 0.9;

  acceleration = gravity;
}

function draw() {
  if (y >= 300) {
    y = 300;

    if (velocity < 0) {
      y += velocity;
    }
  }
  else {
    velocity += acceleration;
    y += velocity;
  }

  ellipse(640 / 2, y, 25, 25);
}

function keyPressed() {
  if (keyCode === 32) {
    velocity = -10;
  }
}