const init = () => {
  const luigi = document.getElementById("luigi");
  if (luigi === null) {
    console.error("document with the id 'Luigi' not found");
  } else {
    luigi.addEventListener("click", () => {
      luigi.style.animation =
        "luigi-jump 0.6s cubic-bezier(0.5, 0.05, 0.1, 1) forwards, drive 5s linear infinite both";
    });
    //Continue driving after jumping.
    luigi.addEventListener("animationend", () => {
      luigi.style.animation = "drive 5s linear infinite both";
    });
  }
};
window.onload = init;
