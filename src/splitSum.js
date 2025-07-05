/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */
function splitSum1(tours) {
  const total = tours.reduce((a, c) => a + c, 0);
  let preSum = 0;
  let postSum = total;
  let smallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < tours.length - 1; i++) {
    preSum += tours[i];
    postSum -= tours[i];
    let difference = Math.abs(preSum - postSum);

    if (difference < smallest) smallest = difference;
  }

  return smallest;
}

/**
 * Write a function named splitSum2 that implements algorithm 2 here
 */
function splitSum2(tours) {
  let smallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < tours.length; i++) {
    let preSum = tours.slice(0, i + 1).reduce((a, c) => a + c, 0);
    let postSum = tours.slice(i + 1).reduce((a, c) => a + c, 0);
    let difference = Math.abs(preSum - postSum);

    if (difference < smallest) smallest = difference;
  }

  return smallest;
}

module.exports = { splitSum1, splitSum2 };
