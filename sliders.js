document.addEventListener("DOMContentLoaded", function () {
  const nextSlider = document.getElementById("right-slider");
  const prevSlider = document.getElementById("left-slider");
  const slides = document.querySelectorAll(".biography-card");
  const biographyCardSlider = document.querySelector(".biography-cards-slider");
  let currentIndex = 0;

  function updateSlider() {
    console.log("Upadting slider");
    biographyCardSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    console.log("Next slide");
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    console.log("Previous slide");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  if (nextSlider && prevSlider) {
    prevSlider.addEventListener("click", prevSlide);
    nextSlider.addEventListener("click", nextSlide);
    console.log("Slider initialized successfully");
  } else {
    console.error("Slider buttons not found");
  }
});
