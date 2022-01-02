function setup() {
  windowSize = min(windowWidth * 0.5, windowHeight * 0.5);
  createCanvas(windowSize, windowSize);
}

// Just dots
//
// function draw() {
//   for (let i = 10; i < windowSize * 0.99; i = i + windowSize / 29) {
//     for (let j = 10; j < windowSize * 0.99; j = j + windowSize / 29) {
//       strokeWeight(random(windowSize / 175, windowSize / 35));
//       stroke(random(0, 150), 26, 105);
//       point(i, j);
//     }
//   }
//   noLoop();
// }

//Hanging beads
//
// function draw() {
//   for (let i = 10; i < windowSize * 0.99; i = i + windowSize / 39) {
//     for (let j = 10; j < windowSize * 0.99; j = j + windowSize / 99) {
//       strokeWeight(random(windowSize / 105, windowSize / 45));
//       stroke(random(0, 150), 26, 105);
//       point(i, j);
//     }
//   }
//   noLoop();
// }

// Overgrown
//
// function draw() {
//   for (let i = 10; i < windowSize * 0.99; i = i + windowSize / 99) {
//     for (let j = 10; j < windowSize * 0.99; j = j + windowSize / 99) {
//       strokeWeight(random(windowSize / 195, windowSize / 45));
//       stroke(random(0, 150), 26, 105);
//       point(i, j);
//     }
//   }
//   noLoop();
// }

// Fluffy square
//
function draw() {
  for (let i = 20; i < windowSize * 0.97; i = i + windowSize / 75) {
    for (let j = 20; j < windowSize * 0.97; j = j + windowSize / 75) {
      strokeWeight(random(windowSize / 80, windowSize / 20));
      stroke(random(0, 150), 26, 105);
      point(i, j);
    }
  }
  noLoop();
}
