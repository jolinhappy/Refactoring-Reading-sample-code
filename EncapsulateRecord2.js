const jsonData = {
  "1920": {
    name: "martin",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 63,
      }
    }
  },
  "38673": {
    name: "neal",
    id: "38673",
    usages: {
      "2016": {
        "1": 10,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 13,
      }
    }
  }
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }
  get rawData() {
    return_.cloneDeep(this._data);
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}
let customerData;
setRawDataOfCustomers(jsonData);

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData.rawData;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

// 新增更新 customer裡usages的函式
function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}
// 更新時的用法再次調整成以下這樣
getCustomerData().setUsage(1920, 2016, 1, 1234);

// 讀取範例
function compareUsage(customID, laterYear, month) {
  const later = getRawDataOfCustomers()[customID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customID].usages[laterYear - 1][month];
  return {
    laterAmount: later,
    change: later - earlier,
  };
}