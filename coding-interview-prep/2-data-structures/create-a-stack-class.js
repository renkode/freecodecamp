function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = (element) => {
    collection.push(element);
  }
  this.pop = () => {
    return collection.pop();
  }
  this.peek = () => {
    return collection[collection.length-1];
  }
  this.isEmpty = () => {
    return collection.length === 0;
  }
  this.clear = () => {
    collection = [];
  }
  // Only change code above this line
}