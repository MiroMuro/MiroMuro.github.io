let accordionProjectDivs = document.querySelectorAll(
  ".accordion-project"
) as NodeListOf<Element>;

//Eli sitten jokais
const openClose = () => {
  console.log("OPen close");
  console.log("Accordion project divs: ", accordionProjectDivs);

  for (let div of accordionProjectDivs) {
    for (let childElement of div.children) {
      if (childElement.tagName === "BUTTON") {
        childElement.addEventListener("click", () => {
          console.log("Div: ", div);
          let querySelector = "." + div.classList[1];
          console.log("Queryselector ", querySelector);
          var element = document.querySelector(querySelector);
          console.log("Element: ", element);
          element?.classList.toggle("open");
        });
      }
    }
  }
};

window.onload = openClose;
