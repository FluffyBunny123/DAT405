//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  function mouseMoved() {
    value = value + 125;
    if (value < 255) {
      value = 0;
    }
  }

  translate(0, 0);
  scale(2);
  rect (0, 0, 125, 125); //top left square
  rect (125, 125, 125, 125); // bottom right
//  background(255, 0, 0);
 //line(mouseY, 500, mouseY, 500);
  rect (125, 0, 125, 125); // top right
//  background(0, 102, 255);
// line(mouseX, 500, mouseX, 500);
  rect (0, 125, 125, 125); // bottom left
//  background(0, 255, 0);
// line(mouseY, 500, mouseY, 500);
}
