let pillars = [];
//let mbg;
//let myFont;
var gravity = 0.35;
var y = 200;
var vy = -1.0;
var bird;
var gameState = 0;
var score = -2
var highscore = 0;

function preload() {
  bg = loadImage('Images/blabla.png');
  brd = loadImage('Images/download.png');
  lgo = loadImage('Images/logo.png');
  go = loadImage('Images/go1.png');
  die = loadSound('Sounds/die.mp3');
  hit = loadSound('Sounds/hit.mp3');
  point = loadSound('Sounds/point.mp3');
  swoosh = loadSound('Sounds/swoosh.mp3');
  wing = loadSound('Sounds/wing.mp3');
  ping = loadSound('Sounds/correct.mp3');
  mbg = loadSound('Sounds/menu_background.wav');
  myFont = loadFont('Fonts/font1.ttf');
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
        gameState = 2;
        hit.play();
        die.play();
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
    this.y = constrain(this.y, 0, 555);
  }
}

function setup() {
  createCanvas(800, 600);
  bird = new Bird(-0.5, 250, 0.25);
}

function draw() {
  if (gameState == 0){  //START MENU
    background(bg);
    //mbg.loop();

    image(lgo, 25, 50, 750, 200);
    image(brd,150, 250, 500, 275);

    fill("black");
    stroke(255, 255, 255);
    strokeWeight(5);
    text('Press "space" to start', 140, 580);
    textFont(myFont);
    textSize(25);
  }

  else if (gameState == 1){ //GAME
    background(bg);
    mbg.stop();

    if (score <= 0){
      fill("black");
      stroke(255, 255, 255);
      strokeWeight(5);
      text('Score: 0', 25, 50);
    }
    if (score > 0){
      fill("black");
      stroke(255, 255, 255);
      strokeWeight(5);
      text('score: ' + score, 25, 50);
      //ping.play(); WERKT NOG NIET HELEMAAL
    }
    
    bird.draw();
    bird.move();

    if (frameCount % 60 == 0) {
      score = score + 1
      let randomHeight = random(height - 200)

      pillars.push(new Pillar(800, 0, randomHeight));
      pillars.push(new Pillar(800, randomHeight + 150, 1000));
    }

    pillars.forEach(p => p.drawPillar());

    if (pillars.length > 6) {
      pillars.splice(0, 2);
    }
  }

  else if (gameState == 2){ // GAME OVER
    gameOver();
  }
}

function gameOver(){

  if (score > highscore){
    highscore = score;
  }

  background(bg);
  image(go, 25, 25, 750, 200);

  fill(255, 255, 255, 200);
  rect(100, 250, 600, 250, 20);

  fill("black");
  stroke(255, 255, 255);
  strokeWeight(5);
  text('Score: '+ score, 120, 350);
  textSize(47);

  fill("black");
  stroke(255, 255, 255);
  strokeWeight(5);
  text('Highscore: ' + highscore, 120, 440);
  textSize(25);

  fill("black");
  stroke(255, 255, 255);
  strokeWeight(5);
  text('Press "space" to play again', 70, 580);
  textSize(47);
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
      reset();
    }
  }
}

function reset(){
  pillars = [];
  bird.y = 200;
  bird.vy = 0;
  gameState = 0;
  score = -2;
}
