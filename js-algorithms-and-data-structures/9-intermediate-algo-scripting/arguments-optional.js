// addTogether(2, 3) should return 5.
// addTogether(23, 30) should return 53.
// addTogether(5)(7) should return 12.
// addTogether("2", 3) should return undefined.

// currying
function addTogether(...x) {
  if (x.some(el => !Number.isInteger(el))) return undefined;
  if (x.length > 1) {
    return x.reduce((prev,cur) => prev + cur, 0)
  }
  return function(y) {
    if (!Number.isInteger(y)) return undefined;
    return x[0] + y; //even if there's one x passed in, it's still an array
  }
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));