const init = () => {
  const luigi = document.getElementById("luigi");
  luigi.addEventListener("click", () => {
    luigi.style.animation =
      "luigi-jump 0.3s linear forwards, drive 5s linear infinite both";
  });
  luigi.addEventListener("animationend", () => {
    luigi.style.animation = "drive 5s linear infinite both";
  });
  console.log(luigi);
};
window.onload = init;
