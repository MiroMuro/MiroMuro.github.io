let accordionProjectDivs = document.querySelectorAll(".accordion-project");

//Eli sitten jokais
const openClose = () => {
  console.log("OPen close");
  console.log("Accordion project divs: ", accordionProjectDivs);

  for (let div of accordionProjectDivs) {
    for (let childElement of div.children) {
      if (childElement.tagName === "BUTTON") {
        childElement.addEventListener("click", () => {
          let querySelector = "." + div.classList[1];
          document.querySelectorAll(".accordion-project").forEach((el) => {
            if (el.classList[1] !== div.classList[1]) {
              el.classList.remove("open");
            }
          });
          var element = document.querySelector(querySelector);
          element?.classList.toggle("open");
        });
      }
    }
  }
};

window.onload = openClose;
