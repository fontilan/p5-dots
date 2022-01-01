function setup() {
  windowSize = min(windowWidth * 0.75, windowHeight * 0.75);
  createCanvas(windowSize, windowSize);
}

function draw() {
  background(240);
  for (let i = 10; i < Math.floor(windowSize); i = i + windowSize / 29) {
    for (let j = 10; j < Math.floor(windowSize); j = j + windowSize / 29) {
      strokeWeight(random(windowSize / 175, windowSize / 35));
      stroke(random(0, 150), 26, 105);
      point(i, j);
    }
  }
  noLoop();
}
