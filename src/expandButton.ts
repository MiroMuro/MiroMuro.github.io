let accordionProjectDivs = document.querySelectorAll(
  ".accordion-project"
) as NodeListOf<Element>;

//A working example.
// const openClose = () => {
//   for (let button of expandButtons) {
//     button.addEventListener("click", () => {
//       button.classList.toggle("open");
//     });
//   }
// };

//Eli sitten jokais
const openClose = () => {
  console.log("OPen close");
  console.log("Accordion project divs: ", accordionProjectDivs);

  for (let div of accordionProjectDivs) {
    for (let childElement of div.children) {
      if (childElement.tagName === "BUTTON") {
        childElement.addEventListener("click", () => {
          let querySelector = "." + div.classList[1];
          console.log("Queryselector ", querySelector);
          var element = document.querySelector(querySelector);
          console.log("Element: ", element);
          element?.classList.toggle("open");
        });
      }
    }
  }
  /*for (let div of accordionProjectDivs) {
    if (div.classList[1] === "tl") {
      for (let childElement of div.children) {
        if (childElement.tagName === "BUTTON") {
          childElement.addEventListener("click", () => {
            console.log("Button clicked");
            var element = document.querySelector(".tl");
            element?.classList.toggle("open");
          });
        }
      }
    }
    
  }*/
};

window.onload = openClose;
