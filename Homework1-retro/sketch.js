//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(800, 600);

  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //All canvas white
  background(255, 255, 255);

  //Brown rectangle
  fill(153, 102, 51);
  rect(150, 200, 500, 200);

  //Eye White
  fill(255, 255, 255);
  ellipse(width- 200, 250, 70, 70);

  //Eye black
  fill(0, 0, 0);
  ellipse(600, height- 350, 50, 50);

  //Eye white on black
  fill(255, 255, 255);
  ellipse(width-190, height-370, 10, 10);

  //Left leg
  fill(153, 102, 51);
  rect(150, 400, 50, 60);

  //Right leg
  fill(153, 102, 51);
  rect(500, 400, 50, 60);

  //Right foot
  fill(255, 255, 0);
  rect(500, 460, 70, 25);

  //Left foot
  fill(255, 255, 0);
  rect(150, 460, 70, 25);

  //Bill 1
  fill(255, 255, 0);
  rect(650, 250, 10, 70);

  //Bill 2
  fill(255, 255, 0);
  rect(650, 300, 70, 20);

  //Tail pixle 1
  fill(255, 255, 0);
  rect(130, 210, 20, 20);

  //Tail pixle 2
  fill(255, 255, 0);
  rect(125, 220, 20, 20);

  //Tail pixle 3
  fill(255, 255, 0);
  rect(120, 230, 20, 20);

  //Tail pixle 4
  fill(255, 255, 0);
  rect(115, 240, 20, 20);

  //Tail pixle 5
  fill(255, 255, 0);
  rect(110, 250, 20, 20);

  //Tail pixle 6
  fill(255, 255, 0);
  rect(110, 260, 20, 20);

  //Tail pixle 7
  fill(255, 255, 0);
  rect(110, 270, 20, 20);

  //Tail pixle 8
  fill(255, 255, 0);
  rect(110, 280, 20, 20);

  //Tail pixle 9
  fill(255, 255, 0);
  rect(110, 290, 20, 20);

  //Tail pixle 10
  fill(255, 255, 0);
  rect(110, 300, 20, 20);

  //Tail pixle 11
  fill(255, 255, 0);
  rect(110, 310, 20, 20);
}
