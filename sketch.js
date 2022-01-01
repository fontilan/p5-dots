function setup() {
  windowSize = min(windowWidth * 0.75, windowHeight * 0.75);
  createCanvas(windowSize, windowSize);
}

function draw() {
  background(240);
  for (let i = 10; i < windowSize * 0.99; i = i + windowSize / 39) {
    for (let j = 10; j < windowSize * 0.99; j = j + windowSize / 99) {
      strokeWeight(random(windowSize / 105, windowSize / 45));
      stroke(random(0, 150), 26, 105);
      point(i, j);
    }
  }
  noLoop();
}
