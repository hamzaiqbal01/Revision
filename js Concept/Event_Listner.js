const grandParent = document.querySelector(".gradParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click", (e) => {
  console.log(e.target);
});

child.addEventListener("click", (e) => {
  console.log((e.target.innerText = "bye"));
  console.log((e.target.style.background = "yellow"));
});

grandParent.addEventListener(
  "click",
  (e) => {
    //   console.log(e.target);
    console.log("grandParent1");
  },
  { capture: true }
);

parent.addEventListener("click", (e) => {
  //   console.log(e.target);
  console.log("Parent1");
});

child.addEventListener(
  "click",
  (e) => {
    //   console.log(e.target);
    console.log("child");
  },
  { capture: true }
);
