document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.getElementsByClassName("accordion");
  var index;

  if (accordions === null) return;

  for (index = 0; index < accordions?.length; index++) {
    accordions[index].addEventListener("click", (e) => {
      var accordionButton = e.target;

      accordionButton.classList.toggle("active");

      var accordionPanel = accordionButton.nextElementSibling;

      const indexOfAccordionButton =
        Array.from(accordions).indexOf(accordionButton);
      closeOtherAccordionPanels(indexOfAccordionButton);

      if (accordionPanel.style.maxHeight) {
        accordionPanel.style.maxHeight = "";
      } else {
        accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
      }
    });
  }

  const closeOtherAccordionPanels = (index) => {
    for (let i = 0; i < accordions.length; i++) {
      if (i !== index) {
        const accordionButton = accordions[i];

        if (accordionButton.classList.contains("active")) {
          accordionButton.classList.remove("active");
        }

        const accordionPanel = accordions[i].nextElementSibling;
        if (accordionPanel.style.maxHeight) {
          accordionPanel.style.maxHeight = "";
        }
      }
    }
  };
});
