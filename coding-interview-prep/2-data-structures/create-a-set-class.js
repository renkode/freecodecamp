class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(element) {
    if (this.has(element)) {
      return false;
    } else {
      this.dictionary[element] = element;
      return true;
    }
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element]
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.values().length;
  }
  // Only change code above this line
}