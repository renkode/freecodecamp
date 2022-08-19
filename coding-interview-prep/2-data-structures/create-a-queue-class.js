function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = (element) => {
    collection.push(element);
  }
  this.dequeue = () => {
    return collection.shift();
  }
  this.front = () => {
    return collection[0];
  }
  this.size = () => {
    return collection.length;
  }
  this.isEmpty = () => {
    return collection.length === 0;
  }
  // Only change code above this line
}