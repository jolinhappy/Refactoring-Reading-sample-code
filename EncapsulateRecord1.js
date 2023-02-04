class Organization {
  constructor(data) {
    // 將＿data欄位和物件融合
    this._name = data.name;
    this._country = data.country;
  }
  // 加入set 和 get
  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: 'Jolin',
  country: 'TW'
});
let result = '';
// 讀取時
result += `<h1>${getOrganization().name}</h1>`;

// 只保留這個函式
function getOrganization() {
  return organization;
}
// 想要進行更新的話
getOrganization().name = 'Hebe';