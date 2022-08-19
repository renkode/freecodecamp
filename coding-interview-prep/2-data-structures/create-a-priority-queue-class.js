function PriorityQueue () {
  this.collection = [];   // example queue: [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  this.front = () => { // front should return only the item's name
    return this.isEmpty() ? '' : this.collection[0][0];
  }

  this.size = () => this.collection.length;

  this.isEmpty = () => {
    return this.size() === 0;
  }

  this.enqueue = (arr) => {
    // if empty or all items have higher priority than the new item
    if (this.isEmpty() || this.collection.every(item => item[1] <= arr[1])) {
      this.collection.push(arr);
      return this.collection;
    }
    // slice the part where the target priority changes in the queue, push the new item,  then concat
    // let firstHalf = [];
    // let secondHalf = [];
    for (let i = 0; i < this.collection.length; i++) {
      if (arr[1] < this.collection[i][1]) {
        // firstHalf = this.collection.slice(0,i);
        // firstHalf.push(arr);
        // secondHalf = this.collection.slice(i);
        // this.collection = firstHalf.concat(secondHalf);
        // return this.collection;
        return this.collection.splice(i,0,arr)
      }
    }
  }

  this.dequeue = () => {
     return this.isEmpty() ? '' : this.collection.shift()[0];
  }
  // Only change code above this line
}

const q = new PriorityQueue();
q.enqueue(['kitten', 2]);
q.enqueue(['dog', 2]);
q.enqueue(['rabbit', 2]);
q.enqueue(['human', 3]);
q.enqueue(['bug', 1]);
q.enqueue(['bug2', 3]);
console.log(q.dequeue);
console.log(q.collection, q.front(), q.size())