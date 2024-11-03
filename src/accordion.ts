document.addEventListener("DOMContentLoaded", () => {
  const accordions: HTMLCollectionOf<Element> | null =
    document.getElementsByClassName("accordion");
  var index: number;

  if (accordions === null) return;

  for (index = 0; index < accordions?.length; index++) {
    accordions[index].addEventListener("click", (e) => {
      var accordionButton = e.target as Element;

      accordionButton.classList.toggle("active");

      var accordionPanel = accordionButton.nextElementSibling as HTMLElement;

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

  const closeOtherAccordionPanels = (index: number) => {
    for (let i = 0; i < accordions.length; i++) {
      if (i !== index) {
        const accordionButton = accordions[i] as HTMLElement;

        if (accordionButton.classList.contains("active")) {
          accordionButton.classList.remove("active");
        }

        const accordionPanel = accordions[i].nextElementSibling as HTMLElement;
        if (accordionPanel.style.maxHeight) {
          accordionPanel.style.maxHeight = "";
        }
      }
    }
  };
});
