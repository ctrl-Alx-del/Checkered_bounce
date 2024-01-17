//variables
const boxArr = [];

let wrapper = document.querySelector(".Checkered_Wrapper");

//create 100 divs
for (let i = 0; i <= 99; i++) {
  const createElements = document.createElement("div");
  const divAttribute = createElements.classList.add("box");
  boxArr.push(createElements);
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
