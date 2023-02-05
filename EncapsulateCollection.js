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
  // 改成改動的動作都是在這個class裡面做改動，不是從外面直接進來改
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
    const index = this._course.indexOf(aCourse);
    // 有針對要移除不存在的course時，做跳錯的處理
    if (index === -1) fnIfAbsent();
    else this.courses.splice(index, 1);
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
  basicCourseNames = ['Math', 'English', 'History'];
  return basicCourseNames;
}

let numAdvancedCourses = 0;

// 使用方程式碼（用set來更新courses）
// const basicCourseNames = readBasicCourseNames(filename);
// 這裡用一組假資料當做示範
let basicCourseNames = ['Math', 'English', 'History'];

// 使用方的程式碼如下：

// 把直接改集合的程式碼改成新方法
for(const name of readBasicCourseNames('filename')) {
  aPerson.addCourse(new Course(name, false));
}

// 使用方使用courses集合來取得課程資訊
numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
