function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    let newNode = new Node(element);
    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    length++;
    // Only change code above this line
  };
}