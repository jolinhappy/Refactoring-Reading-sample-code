
class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value
  }
}

class Order {
  constructor(data) {
    this._priority = data.priority;
    // 更多初始化
  }
  get priority() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

const orderList = [
  { priority: 'high' },
  { priority: 'normal' },
  { priority: 'low' },
  { priority: 'rush' },
  { priority: 'high' },
];
const orders = orderList.map(data => new Order({priority: new Priority(data.priority)}));

// 使用方
highPriority = orders.filter(o => 'high' === o.priority || 'rush' === o.priority).length;
