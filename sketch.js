// ============================================================
// Simple Drawing Game
let pen;

function preload() {
  pen = loadImage("assets/images/pen/pen.jpg");
}

function setup() {
  createCanvas(800, 450);

  // If we put this in draw(), it would erase our drawing 60 times a second!
  background(240);

  fill(100);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text("Click and hold to draw! Press 'c' to clear the canvas.", width / 2, 30);

  imageMode(CENTER);
  rectMode(CORNERS);
}

function draw() {
  if (mouseIsPressed) {
    fill(100, 150, 255, 50);
    stroke(0);
    strokeWeight(2);
    rect(startX, startY, mouseX, mouseY);

    image(pen, mouseX, mouseY, 50, 50);
  }
}

function keyPressed() {
  if (key === "c" || key === "C") {
    background(240);

    fill(100);
    noStroke();
    text(
      "Click and hold to draw! Press 'c' to clear the canvas.",
      width / 2,
      30,
    );
  }

  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
