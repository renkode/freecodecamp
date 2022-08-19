const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [first, last] = firstAndLast.split(' ') || '';
  this.getFirstName = function() {
    return first;
  }
  this.getFirstName = function() {
    return first;
  }
  this.setFirstName = function(newFirst) {
    first = newFirst;
  }
  this.getLastName = function() {
    return last;
  }
  this.setLastName = function(newLast) {
    last = newLast;
  }
  this.getFullName = function() {
    return `${first} ${last}`;
  };
  this.setFullName = function(firstAndLast) {
    [first, last] = firstAndLast.split(' ');
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
//console.log(bob instanceof Person)
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());