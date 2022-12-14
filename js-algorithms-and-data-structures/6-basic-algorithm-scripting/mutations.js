//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
function mutation(arr) {
  // iterate thru 2nd element and check if each letter is included
  const temp = arr.map(s => s.toLowerCase());
  let areAllPresent = true;
  for (let i = 0; i < temp[1].length; i++) {
    if (!temp[0].includes(temp[1][i])) areAllPresent = false;
  }
  return areAllPresent;
}

console.log(mutation(["hello", "hey"]));