//variables
const boxArr = [];

let wrapper = document.querySelector(".Checkered_Wrapper");

//create 100 divs
for (let i = 0; i <= 999; i++) {
  const createBoxes = document.createElement("div");
  const addBox = createBoxes.classList.add("box");
  boxArr.push(createBoxes);
}

//append the 100 divs to wrapper
for (const element of boxArr) {
  wrapper.appendChild(element);
}

boxArr.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.toggle("boxAnimate");
  });
});

//work on making a checkered board that has almost the same functionality

//brug setinterval og setTimeout til at lave noget sjovt med det her hvor
boxArr.forEach((box, index) => {
  let modulusOperator = 8;
  if (index % modulusOperator === 0) {
    box.style.backgroundColor = "red";
  }
});
