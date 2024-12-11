document.addEventListener("DOMContentLoaded", () => {
  const biographyContent = document.querySelector(".biography-content");
  const sliderArrowPrev = document.querySelector(".slider-arrow.prev");
  const sliderArrowNext = document.querySelector(".slider-arrow.next");
  const slides = document.querySelectorAll(".biography-slide");

  let currentSlide = 0;

  const goToSlide = (slideIndex) => {
    if (!biographyContent || !slides) return;

    if (window.innerWidth > 768) {
      biographyContent.style.display = "flex";
      biographyContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    } else {
      biographyContent.style.display = "none";
    }
    currentSlide = slideIndex;
  };

  sliderArrowPrev?.addEventListener("click", () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    goToSlide(currentSlide);
  });

  sliderArrowNext?.addEventListener("click", () => {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    goToSlide(currentSlide);
  });

  //Initial state
  slides[0].classList.add("active");

  //Handle resize
  window.addEventListener("resize", () => {
    goToSlide(currentSlide);
  });
});
