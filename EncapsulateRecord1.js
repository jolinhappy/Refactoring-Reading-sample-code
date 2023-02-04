// 一般紀錄
class Organization {
  constructor(data) {
    this._data = data;
  }
  // 加入set 和 get
  get name() {
    return this._data.name;
  }
  set name(aString) {
    this._data.name = aString;
  }
}

const organization = new Organization({
  name: 'Jolin',
  country: 'TW'
});
let result = '';
// 讀取時
result += `<h1>${getOrganization().name}</h1>`;

// 用好查詢的名稱命名這個取得紀錄的函式
function getRawDataOfOrganization() {
  // 替換成取得class裡面的data
  return organization._data;
}
// 也補上取得class物件的function
function getOrganization() {
  return organization;
}
// 想要進行更新的話
getOrganization().name = 'Hebe';