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

const customerData = jsonData;

// 更新範例
// customerData[customID].usages[year][month] = amount;
customerData[1920].usages[2016][1] = 1000000;


// 讀取範例
function compareUsage(customID, laterYear, month) {
  const later = customerData[customID].usages[laterYear][month];
  const earlier = customerData[customID].usages[laterYear - 1][month];
  return {
    laterAmount: later,
    change: later - earlier,
  };
}