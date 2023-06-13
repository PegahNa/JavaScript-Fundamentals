class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getname() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}
class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    const totalPrice = this.items.reduce(
      (acc, item) => acc + item.getPrice(),
      0
    );
    return totalPrice.toFixed(2);
  }

  addItem(item) {
    this.items.push(item);
  }
}
