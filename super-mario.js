// Player position
let x = 100;
let y = 300;

let sx = 400;
let sy = 300;


// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();
  
  fill(150, 80, 20)
  rect(400, 250, 100, 80);

  drawPlayer();
  drawShell();
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();

  if (key === "d") moveRight();
  
  if (key === "a") moveLeft();
  
  if (key === "s") crouch()
  
}

function crouch() {
  y = y+30;
}

function moveRight() {
  x = x+50;  
}

function moveLeft() {
  x = x-50;
}



// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(255, 60, 60);
  rect(x, y, 40, 40);
  
}

function drawShell() {
  fill(60, 60, 60);
  circle(sx, sy, 50)
}
