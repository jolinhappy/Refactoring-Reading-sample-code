class Order {
  constructor(data) {
    this._priority = data.priority;
    // 更多初始化
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

const orderList = [
  { priority: 'high' },
  { priority: 'normal' },
  { priority: 'low' },
  { priority: 'rush' },
  { priority: 'high' },
];
const orders = orderList.map(data => new Order(data));

// 使用方
highPriority = orders.filter(o => 'high' === o.priority || 'rush' === o.priority).length;
