function setup() {
  canvasSize = min(windowWidth * 0.5, windowHeight * 0.5);
  createCanvas(canvasSize, canvasSize);
  noLoop();
}

let colours = [
  "#e6dfff",
  "#d9bfff",
  "#cc9eff",
  "#c588ff",
  "#ac71ff",
  "#9059ff",
  "#7543e3",
  "#582acb",
  "#46278e",
  "#321c64",
];

// Just dots
//
function draw() {
  for (let i = 10; i < canvasSize * 0.98; i = i + canvasSize / 29) {
    for (let j = 10; j < canvasSize * 0.98; j = j + canvasSize / 29) {
      strokeWeight(random(canvasSize / 175, canvasSize / 35));
      stroke(random(colours));
      point(i, j);
    }
  }
}

//Hanging beads
//
// function draw() {
//   for (let i = 10; i < canvasSize * 0.99; i = i + canvasSize / 39) {
//     for (let j = 10; j < canvasSize * 0.99; j = j + canvasSize / 99) {
//       strokeWeight(random(canvasSize / 105, canvasSize / 45));
//       stroke(random(colours));
//       point(i, j);
//     }
//   }
// }

// Overgrown
//
// function draw() {
//   for (let i = 10; i < canvasSize * 0.99; i = i + canvasSize / 99) {
//     for (let j = 10; j < canvasSize * 0.99; j = j + canvasSize / 99) {
//       strokeWeight(random(canvasSize / 195, canvasSize / 45));
//       stroke(random(colours));
//       point(i, j);
//     }
//   }
// }

// Fluffy square
//
// function draw() {
//   for (let i = 20; i < canvasSize * 0.97; i = i + canvasSize / 75) {
//     for (let j = 20; j < canvasSize * 0.97; j = j + canvasSize / 75) {
//       strokeWeight(random(canvasSize / 80, canvasSize / 20));
//       stroke(random(colours));
//       point(j, i);
//     }
//   }
// }

// Sea of Purple
//
// function draw() {
//   for (let i = 10; i < canvasSize + 100; i = i + canvasSize / 99) {
//     for (let j = 10; j < canvasSize * 0.99; j = j + canvasSize / 99) {
//       strokeWeight(random(canvasSize / 80, canvasSize / 5));
//       stroke(random(colours));
//       point(j, i);
//     }
//   }
// }

// Triangle of cirlces
// //
// function draw() {
//   rotate(QUARTER_PI);
//   for (let i = 40; i < canvasSize; i = i + canvasSize / 29) {
//     for (let j = 0; j < canvasSize + 400; j = j + canvasSize / 29) {
//       strokeWeight(random(canvasSize / 80, canvasSize / 5));
//       stroke(random(colours));
//       point(j, i);
//     }
//   }
// }
