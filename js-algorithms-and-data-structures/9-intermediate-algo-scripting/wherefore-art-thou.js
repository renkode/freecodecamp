// return all objects that match the target key(s) and value(s)

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  collection.forEach(obj => {
    let contains = true;
    for (let key in source) {
      if (!obj[key] || obj[key] !== source[key]) contains = false;
    }
    if (contains) arr.push(obj);
  });

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));