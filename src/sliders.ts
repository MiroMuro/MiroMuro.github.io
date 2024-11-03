document.addEventListener("DOMContentLoaded", () => {
  const biographyDropdown: HTMLSelectElement | null = document.querySelector(
    ".biography-dropdown"
  );
  const biographyContent: HTMLElement | null =
    document.querySelector(".biography-content");
  const sliderArrowPrev: HTMLElement | null =
    document.querySelector(".slider-arrow.prev");
  const sliderArrowNext: HTMLElement | null =
    document.querySelector(".slider-arrow.next");
  const slides: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".biography-slide");

  let currentSlide = 0;

  const goToSlide = (slideIndex: number) => {
    if (!biographyContent || !slides) return;

    if (window.innerWidth > 768) {
      biographyContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    } else {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[slideIndex].classList.add("active");
    }
    currentSlide = slideIndex;
  };

  sliderArrowPrev?.addEventListener("click", () => {
    console.log("prev");
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    goToSlide(currentSlide);
  });

  sliderArrowNext?.addEventListener("click", () => {
    console.log("next");
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    goToSlide(currentSlide);
  });

  biographyDropdown?.addEventListener("change", (e) => {
    if (!e.target) return;
    const index = (e.target as HTMLSelectElement).selectedIndex;
    goToSlide(index);
  });
  console.log("The slides: ", slides);
  //Initial state
  slides[0].classList.add("active");

  //Handle resize
  window.addEventListener("resize", () => {
    goToSlide(currentSlide);
  });
});
