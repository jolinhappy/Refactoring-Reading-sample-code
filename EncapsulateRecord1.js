// 一般紀錄
class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({
  name: 'Jolin',
  country: 'TW'
});
let result = '';
// 讀取時
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

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
getRawDataOfOrganization().name = 'Hebe';