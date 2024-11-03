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
      if (accordionPanel.style.display === "block") {
        accordionPanel.style.display = "none";
      } else {
        accordionPanel.style.display = "block";
      }
    });
  }
});
