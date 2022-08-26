function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = (index, element) => {
    let newNode = new Node(element);
    if (index < 0 || index >= length) return false;
    if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      let previous = head;
      let current = head;
      let currentIndex = index;
      while (current.next) {
        if (currentIndex === 0) {
          previous.next = newNode;
          newNode.next = current;
        }
        currentIndex--;
        previous = current;
        current = current.next;
      }
    }
    length++;
  }
  // Only change code above this line
}