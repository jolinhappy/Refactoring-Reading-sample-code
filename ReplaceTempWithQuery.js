class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this.item = item;
  }
  get price() {
    const discountFactor = this.discountFactor;
    return this.basePrice * discountFactor;
  }
  get basePrice() {
    return this._quantity * this.item.price
  }
  get discountFactor() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
      return discountFactor
  }
}

//  使用時
const order = new Order(1, {
  name: 'book',
  price: 200
});

// 取得原價和折扣價
console.log(order.price);
console.log(order.basePrice);