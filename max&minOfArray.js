//FIND USING MATH FUNCTION

function maxAndMin(array) {
  return [Math.max(...array), Math.min(...array)];
}
array = [3, 2, 5, 9, 7, 1];
console.log(maxAndMin(array));

//USING NORMAL FUNCTION

function largestAndSmallest(a) {
  let min = a[0];
  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
    if (a[i] > max) {
      max = a[i];
    }
  }

  return [min, max];
}

console.log(largestAndSmallest(array));
