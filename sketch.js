// ============================================================
// Simple Drawing Game

function setup() {
  createCanvas(800, 450);

  // If we put this in draw(), it would erase our drawing 60 times a second!
  background(240);

  fill(100);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text("Click and hold to draw! Press 'c' to clear the canvas.", width / 2, 30);
}

function draw() {
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(4);

    line(pmouseX, pmouseY, mouseX, mouseY);
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
