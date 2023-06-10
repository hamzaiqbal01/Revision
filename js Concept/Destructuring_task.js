console.log("************ Excersise 1 **************");

const topSalary = (salaries) => {
  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) maxSalary = salary;
    maxName = name;
  }
  console.log(`${maxName}: ${maxSalary}`);
};

const salaries = {
  Hamza: 100,
  Iqbal: 200,
  Taimoor: 50,
};
let topSalaryPerson = {
  x: 0,
};

topSalary(salaries);

// merging the two objects

const mergeObj = (obj1, obj2) => {
  const obj3 = { ...obj1, ...obj2 };
  console.log(obj3);
};

let student1 = {
  name1: "Hamza",
  age1: 22,
};

let student2 = {
  name2: "Taimoor",
  age2: 23,
};

mergeObj(student1, student2);

// const studentRecord = { ...student1, student2 };
// for (let [key, value] of Object.entries(studentRecord)) {
//   console.log(`${key}:${value}`);
// }
// console.log(studentRecord);

// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let obj2 = {
//   d: 2,
//   e: 4,
//   f: 5,
// };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
