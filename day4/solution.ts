import { assignments } from "./input";

let containedCount = 0;

// Fully overlap

assignments.forEach((assignment) => {
  // first pair is contained in second pair
  const isFirstContained =
    assignment[0] >= assignment[2] && assignment[1] <= assignment[3];

  // second pair is contained in first pair
  const isSecondContained =
    assignment[2] >= assignment[0] && assignment[3] <= assignment[1];

  if (isFirstContained || isSecondContained) {
    containedCount = containedCount + 1;
  }
});

console.log(containedCount);

// Has any overlap

let noOverlapCount = 0;

assignments.forEach((assignment) => {
  const isSecondSmaller =
    assignment[2] < assignment[0] && assignment[3] < assignment[0];
  const isFirstSmaller =
    assignment[0] < assignment[2] && assignment[1] < assignment[2];

  if (isSecondSmaller || isFirstSmaller) {
    noOverlapCount = noOverlapCount + 1;
  }
});

console.log(assignments.length - noOverlapCount);
