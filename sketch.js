function setup() {
  canvasSize = min(windowWidth * 0.5, windowHeight * 0.5);
  createCanvas(canvasSize, canvasSize);
}

// Just dots
//
function draw() {
  for (let i = 10; i < canvasSize * 0.98; i = i + canvasSize / 29) {
    for (let j = 10; j < canvasSize * 0.98; j = j + canvasSize / 29) {
      strokeWeight(random(canvasSize / 175, canvasSize / 35));
      stroke(random(0, 175), 26, 105);
      point(i, j);
    }
  }
  noLoop();
}

//Hanging beads
//
// function draw() {
//   for (let i = 10; i < canvasSize * 0.99; i = i + canvasSize / 39) {
//     for (let j = 10; j < canvasSize * 0.99; j = j + canvasSize / 99) {
//       strokeWeight(random(canvasSize / 105, canvasSize / 45));
//       stroke(random(0, 175), 26, 105);
//       point(i, j);
//     }
//   }
//   noLoop();
// }

// Overgrown
//
// function draw() {
//   for (let i = 10; i < canvasSize * 0.99; i = i + canvasSize / 99) {
//     for (let j = 10; j < canvasSize * 0.99; j = j + canvasSize / 99) {
//       strokeWeight(random(canvasSize / 195, canvasSize / 45));
//       stroke(random(0, 175), 26, 105);
//       point(i, j);
//     }
//   }
//   noLoop();
// }

// Fluffy square
//
// function draw() {
//   for (let i = 20; i < canvasSize * 0.97; i = i + canvasSize / 75) {
//     for (let j = 20; j < canvasSize * 0.97; j = j + canvasSize / 75) {
//       strokeWeight(random(canvasSize / 80, canvasSize / 20));
//       stroke(random(0, 175), 26, 105);
//       point(j, i);
//     }
//   }
//   noLoop();
// }

// Sea of Purple
//
// function draw() {
//   for (let i = 10; i < canvasSize + 100; i = i + canvasSize / 99) {
//     for (let j = 10; j < canvasSize * 0.99; j = j + canvasSize / 99) {
//       strokeWeight(random(canvasSize / 80, canvasSize / 5));
//       stroke(random(0, 175), 26, 105);
//       point(j, i);
//     }
//   }
//   noLoop();
// }

// Triangle of cirlces
// //
// function draw() {
//   rotate(QUARTER_PI);
//   for (let i = 40; i < canvasSize; i = i + canvasSize / 29) {
//     for (let j = 0; j < canvasSize + 400; j = j + canvasSize / 29) {
//       strokeWeight(random(canvasSize / 80, canvasSize / 5));
//       stroke(random(0, 175), 26, 105);
//       point(j, i);
//     }
//   }
//   noLoop();
// }
