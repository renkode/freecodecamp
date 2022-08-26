function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = () => {
    return length === 0;
  }

  this.indexOf = element => {
    let current = head;
    let index = 0;
    while (current.next) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  this.elementAt = index => {
    let current = head;
    let count = index;
    while (current.next) {
      if (count === 0) return current.element;
      current = current.next;
      count--;
    }
    return undefined;
  }
  // Only change code above this line
}