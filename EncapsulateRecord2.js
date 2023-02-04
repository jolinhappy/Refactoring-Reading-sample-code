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

let customerData;
setRawDataOfCustomers(jsonData);

function getRawDataOfCustomers() {
  return customerData;
}
function setRawDataOfCustomers(arg) {
  customerData = arg;
}

// 更新範例
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