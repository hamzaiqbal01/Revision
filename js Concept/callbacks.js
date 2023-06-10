console.log("******************* Callback **************");

//Synchronous: Actions that initiate and finish one by one

//here is a example of synchronus programming in which code is executed line by line
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let clas = prompt("Enter your class");

// Asynchronous : Are that actions that we initiate now and they finish late e.g settime out
console.log("start");
setTimeout(() => {
  console.log("hello");
}, 3000);

console.log("end");

// callbacks

function loadScript(src, loadAlert) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("scripted loaded " + src);
    loadAlert(null, src);
  };
  script.onerror = () => {
    console.log("script cannot be loaded");
    loadAlert(new Error("src got some error"));
  };
  document.body.appendChild(script);
}

const loadAlert = (error, src) => {
  if (error) {
    console.log(error);
    return;
  }
  alert("script loaded" + src);
};
loadScript(
  "https://cdn.jsdel ivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
  loadAlert
);
