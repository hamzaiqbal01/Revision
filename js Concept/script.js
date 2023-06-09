console.log("helo i am going to clear js and react topics");
// write down the program to show Pakistan 5 times
const data = document.querySelector(".data");
const countryName = "pakistan";
for (let i = 0; i < 5; i++) {
  console.log(countryName);
}

const getCommongNumber = (array1, array2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  data.innerHTML = arr3;
};

const arr1 = [1, 2, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 3, 4, 5, 6, 7, 3, 21, 23, 9];
const arr3 = [];
getCommongNumber(arr1, arr2);

//************************** Destructuring of array ***************//

const studentNames = ["hamza", "iqbal", "taimoor"];
const [firstStudent, SecondStudent, thirdStudent] = studentNames;
console.log(
  `first Student : ${firstStudent}\n Second Studnet:${SecondStudent}`
);

// working wit variables
const [stName, surName] = "Hamza Iqbal".split(" ");
console.log(stName, typeof stName);

let [a, b, c] = "abcd";
console.log(c);

// assign to anything  to the left side

let user = {};
[user.name, user.surname] = "hamza iqbal".split(" ");
console.log(user.name);
console.log(typeof user);

// for of loop
const rollNo = [1, 2, 3, 4, 5, 65];
for (let rn of rollNo) {
  console.log(rn);
}

const studentData = {
  name: "hamza",
  age: 23,
};
// console.log(studentData, typeof studentData.name);
const stdata = document.querySelector(".stData");
for (let [key, value] of Object.entries(studentData)) {
  stdata.innerHTML = `${key}: ${value}`;
  console.log(`${key}: ${value}`);
}

// using map
const userData = new Map();
userData.set("name", "hamza");
userData.set("age", 23);

for (let [key, value] of userData) {
  console.log(`Map data ${key}: ${value}`);
}

// swaping the variables

let guest1 = "hamza";
let guest2 = "taimoor";
console.log(guest1, guest2);

[guest1, guest2] = [guest2, guest1];

console.log(`after swaping guest1: ${guest1} \n guest2:${guest2} `);

// rest operator

let [name1, name2, ...rest] = [
  "hamza",
  "iqbal",
  "taimoor",
  "hello coders what are you doing now",
  "😂😂 ohh babes just doing practice",
];
console.log(name1, name2, rest.length);
// in this console ...rest will work as spread operator
console.log(name1, name2, ...rest);

// **************************** Destructuring of Objects ******************//

let options = {
  title: "menu",
  width: 100,
  height: 200,
};
let { title, width, height } = options;
console.log(title, width, height);
