//Here getWeight is a privileged method, because it has access to the private variable weight. This is possible because weight is declared in the same context as getWeight. In JavaScript, a function always has access to the context in which it was created. This is called closure.
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}