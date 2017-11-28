

//Define variables for the RGB
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(400, 400);
  stroke(0);
}

function draw() {
  //background(0);
  //When mouse is pressed, change randomly the RGB variables
  //if (mouseIsPressed) {
  //  r = random(255);
  //  g = random(255);
  //  b = random(255);
  //}
  //Display the squares
  //fill(r, g, b);
  fill(10)
  rect(0, 0, 400, 400);
  if (mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200) {
    fill(255, 0, 0)
    rect(0, 0, 200, 200);//top left
  }

  if (mouseX >= 200 && mouseX <= 400 && mouseY >= 0 && mouseY <= 200) {
      fill(0, 255, 0)
      rect(200, 0, 200, 200);//top right
  }

  if (mouseX >= 0 && mouseX <= 200 && mouseY >= 200 && mouseY <= 400) {
      fill(0, 0, 255)
      rect(0, 200, 200, 200);//bottom left
  }
  if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400) {
      fill(204, 0, 255)
      rect(200, 200, 200, 200);//bottom right
  }
  if (mouseX >= 200 && mouseX <= 200 && mouseY >= 200 && mouseY <= 200) {
    fill (102, 0, 128)
    rect(200, 200, 200, 200);//bottom right
    fill(0, 128, 0)
    rect(200, 0, 200, 200);//top right
    fill(128, 0, 0)
    rect(0, 0, 200, 200);//top left
    fill(0, 0, 128)
    rect(0, 200, 200, 200);//bottom left

  }
}

//rect(200, 200, 200, 200);//bottom right
//rect(200, 0, 200, 200);//top right
//rect(0, 200, 200, 200);//bottom left
