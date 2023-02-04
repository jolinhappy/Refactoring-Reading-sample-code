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
}
let customerData;
setRawDataOfCustomers(jsonData);

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData._data;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

// 更新資料的用法一樣不變
// getRawDataOfCustomers()[customerID].usages[year][month] = amount;
getRawDataOfCustomers()[1920].usages[2016][1] = 1000000;

// 讀取範例
function compareUsage(customID, laterYear, month) {
  const later = getRawDataOfCustomers()[customID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customID].usages[laterYear - 1][month];
  return {
    laterAmount: later,
    change: later - earlier,
  };
}