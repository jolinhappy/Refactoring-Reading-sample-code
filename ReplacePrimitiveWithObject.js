
class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value))
      this._value = value;
    else
      throw new Error(`<${value}> is invalid for Priority`)
    this._value = value;
  }
  toString() {
    return this._value
  }
  get _index() {
    return Priority.legalValues().findIndex(s => s === this._value);
  }
  static legalValues() {return ['low', 'normal', 'high', 'rush']}
    
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}

class Order {
  constructor(data) {
    this._priority = data.priority;
    // 更多初始化
  }
  get priority() {
    return this._priority;
  }
  get priorityString() {
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
highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority('normal'))).length;