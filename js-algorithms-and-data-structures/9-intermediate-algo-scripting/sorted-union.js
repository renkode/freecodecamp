//Passed: uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

function uniteUnique(...arr) {
  let temp = arr.reduce((prev,current) => prev.concat(current), []);
  let unique = [];
  temp.forEach(val => {if (!unique.includes(val)) unique.push(val)});
  return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));