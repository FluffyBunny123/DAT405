//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_NestedForLoop - Visual

let size = 50;

function setup() {
  createCanvas(500, 500);
  //noLoop();
  frameRate(1);
}

function draw() {
  //Run the nested loop for x, and y
  for (let x = 0; x < 100; x++) {
    let size = random(5, 100);
    // Get a random element from an array using the random(Array) syntax
    fill(random(255), random(300) ,random(50));
    ellipse(random(width), random(height), size, size);
    rect(random(width), random(height), size, size)
  }
}
