function setup() {
  windowSize = min(windowWidth * 0.6, windowHeight * 0.6);
  createCanvas(windowSize, windowSize);
  let x = windowWidth;
  let y = windowHeight;
  console.log("windowSize:", windowSize);
}

function draw() {
  background(240);
  for (let i = 10; i < Math.floor(windowSize); i = i + windowSize / 29) {
    for (let j = 10; j < Math.floor(windowSize); j = j + windowSize / 29) {
      strokeWeight(random(windowSize / 175, windowSize / 35));
      stroke(random(0, 150), 26, 105);
      point(j, i);
    }
  }
  noLoop();
}
