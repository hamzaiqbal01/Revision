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

let student1 = {
  name: "Hamza",
  age: 22,
};

let student2 = {
  name: "Taimoor",
  age: 23,
};

const studentRecord = { ...student1, ...student2 };
for (let [key, value] of Object.entries(studentRecord)) {
  console.log(`${key}:${value}`);
}
console.log(studentRecord);
