export class PseudoArray {
  constructor(...args) {
    // this.array = [...arr];
    console.log(args);
    this.array = { ...args };
    console.log(this.array);
    this.length = Object.keys(this.array).length;
    console.log(this.length);
  }
  // new PseudoArray(1,2,3,4);
  // it has a `pop` method that removes the last element
  // from an array and returns that element
  pop() {
    // get the last item return it
    const lastItem = this.array[this.length - 1];
    // delete
    delete this.array[this.length - 1];

    this.length = this.length - 1;
    return lastItem;
  }

  push(newElement) {
    this.array[this.length] = newElement;
    this.length = this.length + 1;

    return newElement;
  }

  forEach(callback) {
    for (const element in this.array) {
      callback(element);
    }
  }
}
