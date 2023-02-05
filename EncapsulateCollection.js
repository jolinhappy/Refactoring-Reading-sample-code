class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    return this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

const aPerson = new Person('Jolin');

function readBasicCourseNames(filename) {
  let basicCourseNames = [];

  // 讀取檔案或從資料庫中獲取基礎課程的名稱的程式碼
  // ...
  // basicCourseNames = ['Math', 'English', 'History'];
  return basicCourseNames;
}

let numAdvancedCourses = 0;

// 使用方程式碼（用set來更新courses）
// const basicCourseNames = readBasicCourseNames(filename);
// 這裡用一組假資料當做示範
let basicCourseNames = ['Math', 'English', 'History'];

// 使用方的程式碼如下：

// 可以利用set改動整個陣列
aPerson.courses = basicCourseNames.map(name => new Course(name, false));
// 也有可能會有人覺得直接改課程的陣列更間單
for(const name of readBasicCourseNames('filename')) {
  aPerson.courses.push(new Course(name, false));
}

// 使用方使用courses集合來取得課程資訊
numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
