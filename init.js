const init = () => {
  const luigi = document.getElementById("luigi");
  luigi.addEventListener("click", () => {
    console.log("Luigi clicked");
    luigi.style.animation =
      "luigi-jump 0.6s cubic-bezier(0.5, 0.05, 0.1, 1) forwards, drive 5s linear infinite both";
  });
  luigi.addEventListener("animationend", () => {
    console.log("Luigi animation ended");
    luigi.style.animation = "drive 5s linear infinite both";
  });
  console.log(luigi);
};
window.onload = init;
