document.addEventListener("DOMContentLoaded", function () {
  const nextSlider = document.getElementById("right-slider");
  const prevSlider = document.getElementById("left-slider");
  const slides = document.querySelectorAll(".biography-card");
  const biographyCardSlider: HTMLElement | null = document.querySelector(
    ".biography-cards-slider"
  );

  let currentIndex = 0;

  if (!nextSlider || !prevSlider || !slides.length || !biographyCardSlider) {
    console.error("One or more elements not found");
    return;
  }

  initializeSliders();

  function initializeSliders(): void {
    prevSlider!.addEventListener("click", prevSlide);
    nextSlider!.addEventListener("click", nextSlide);
  }

  function updateSlider(): void {
    biographyCardSlider!.style.transform = `translateX(-${
      currentIndex * 100
    }%)`;
  }

  function nextSlide(): void {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide(): void {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }
});
