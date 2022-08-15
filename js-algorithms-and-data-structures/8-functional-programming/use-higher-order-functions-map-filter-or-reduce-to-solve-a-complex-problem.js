// function that returns the square of all positive integers in an array of values

const squareList = arr => {
  // Only change code below this line
  let posInts = arr.filter(num => num > 0 && Number.isInteger(num));
  return posInts.map(int => int * int);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);