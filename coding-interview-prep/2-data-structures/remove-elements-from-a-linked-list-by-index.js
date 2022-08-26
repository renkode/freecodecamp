function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
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
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
  this.removeAt = index => {
    if (index < 0 || index >= length) return null;

    let removedElement;

    if (!head.next) {
      removedElement = head.element;
      head = null;
      length = 0;
      return removedElement;
    }

    let previous = head;
    let current = head;
    let currentIndex = index;

    while (current.next) {
      if (currentIndex === 0) {
        removedElement = current.element;
        previous.next = current.next;
        length--;
        return removedElement;
      }
      currentIndex--;
      previous = current;
      current = current.next;
    }
  }
  // Only change code above this line
}