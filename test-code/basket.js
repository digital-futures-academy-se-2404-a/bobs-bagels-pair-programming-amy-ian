
export class basket {
  constructor() {
      this.contents = [];
      this.capacity = 5;
  }

  addBagel(newBagel) {
    if (this.isBasketFull()) {
      return "Error: Basket too full.";
    }

    this.contents.push(newBagel);
    return "Added to basket";
  }

  removeBagel(remBagel) {
    let index = this.contents.indexOf(remBagel);
    if (index > -1) {
      this.contents.splice(index, 1);
      return "Removed from basket";
    } 
      return "Bagel not in basket";
  }

  getContents() {
    return this.contents;
  }

  getCount() {
    return this.contents.length;
  }

  isBasketFull() {
    if (this.getCount() >= this.capacity) {
      return true;
    }
    return false;
  }

  getCapacity() {
    return this.capacity;
  }

  increaseBasketSize(newCap) {
    this.capacity = newCap;
  }
};
