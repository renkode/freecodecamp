// remove all passed elements from the array
function destroyer(arr, ...args) {
  let filtered = [...arr];
  args.forEach(arg => {
    if (filtered.includes(arg)) {
      filtered = filtered.filter(el => el !== arg);
    }
  });
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));