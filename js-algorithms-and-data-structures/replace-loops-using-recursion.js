function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else if (n > arr.length) {
    return "Out of bounds";
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

console.log(sum([6,9,4,2,1], 4));