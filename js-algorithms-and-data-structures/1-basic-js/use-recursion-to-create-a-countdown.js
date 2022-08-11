// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {  
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

console.log(countdown(5));
// in a countup, it goes through 5 -> 1 BEFORE executing the rest of the code (i.e. push), so like: [] -> [1] -> [1, 2] -> [1, 2, 3] etc.
// with unshift, it'd be like: [] -> [1] -> [2, 1] -> [3, 2, 1] etc.