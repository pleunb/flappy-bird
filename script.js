let pillars = [];
var gravity = 0.35;
var y = 200;
var vy = -1.0;
var bird;
var gameState = 0;

function preload() {
  bg = loadImage('Images/blabla.png');
  brd = loadImage('Images/download.png');
  lgo = loadImage('Images/logo.png')
  die = loadSound('Sounds/die.mp3');
  hit = loadSound('Sounds/hit.mp3');
  point = loadSound('Sounds/point.mp3');
  swoosh = loadSound('Sounds/swoosh.mp3');
  wing = loadSound('Sounds/wing.mp3');
}

class Pillar {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 50;
    this.c = "green";
  }

  drawPillar() {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;

    if (bird.x + bird.w > this.x && bird.x < this.x + this.w) {
      if (bird.y + bird.h > this.y && bird.y < this.y + this.h) {
        this.c = "red";
        gameState == 2; //werkt nog niet!!!
      }
    }
    else {
      this.c = "green";
    }
  }
}

class Bird {
  constructor(vy, y, gravity) {
    this.vy = vy;
    this.y = y;
    this.w = 65;
    this.h = 45;
    this.x = 150;
    this.gravity = gravity;
  }

  draw() {
    image(brd, this.x, this.y, this.w, this.h);
  }

  move() {
    this.vy += this.gravity;
    this.y += this.vy;
    this.y = constrain(this.y, 0, 550);
  }
}

function setup() {
  createCanvas(800, 600);
  bird = new Bird(-0.5, 250, 0.25);
}

function draw() { //START MENU
  if (gameState == 0){
    background(bg);
    image(lgo, 25, 50, 750, 200)
    image(brd,150, 250, 500, 275)

    fill("black")
    textFont("times new roman")
    text('Press "space" to start', 275, 590)
    textSize(25);
  }

  if (gameState == 1){ //GAME
    background(bg);
    bird.draw();
    bird.move();

    if (frameCount % 60 == 0) {
      let randomHeight = random(height - 200)

      pillars.push(new Pillar(800, 0, randomHeight));
      pillars.push(new Pillar(800, randomHeight + 150, 1000));
    }

    pillars.forEach(p => p.drawPillar());

    if (pillars.length > 6) {
      pillars.splice(0, 2);
    }
  }

  if (gameState == 2){ // GANE OVER
    background(384);
    color("black")
    text("Game over", 25, 45)
  }
}

function keyPressed() {
  if (keyCode == 32) {
    if (gameState == 1) {
      bird.vy = -7;
      wing.play();
    }
    if (gameState == 0) {
      gameState = 1;
    }
    if (gameState == 2) {
      gameState = 0;
    }
  }
}
