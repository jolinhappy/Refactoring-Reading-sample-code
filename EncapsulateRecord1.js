// 一般紀錄
const organization = {
  name: 'Jolin',
  country: 'TW'
}
let result = '';
// 讀取時
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

// 用好查詢的名稱命名這個取得紀錄的函式
function getRawDataOfOrganization() {
  return organization;
}
// 想要進行更新的話
getRawDataOfOrganization().name = 'Hebe';