// ============================================================
// Simple Drawing Game

function setup() {
  createCanvas(800, 450);

  // We draw the background ONCE in setup().
  // If we put this in draw(), it would erase our drawing 60 times a second!
  background(240); // Light grey "paper"

  // Draw some simple instructions at the top
  fill(100);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text("Click and hold to draw! Press 'c' to clear the canvas.", width / 2, 30);
}

// ------------------------------------------------------------
// draw()
// Runs repeatedly in a loop (60 frames per second).
// This is where we check if the user is holding the mouse.
// ------------------------------------------------------------
function draw() {
  // 'mouseIsPressed' is a built-in p5.js variable that is TRUE
  // as long as the user is holding down the mouse button.
  if (mouseIsPressed) {
    stroke(0); // Set the line color to black (0)
    strokeWeight(4); // Set the line thickness

    // Draw a line from the PREVIOUS mouse position (pmouseX, pmouseY)
    // to the CURRENT mouse position (mouseX, mouseY).
    // This creates a continuous, smooth line instead of broken dots.
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  // If the user presses 'c', clear the canvas by drawing the background again
  if (key === "c" || key === "C") {
    background(240);

    // Redraw the instructions so they aren't lost
    fill(100);
    noStroke();
    text(
      "Click and hold to draw! Press 'c' to clear the canvas.",
      width / 2,
      30,
    );
  }

  // Handy debug tool from your reference code!
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
