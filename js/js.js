// dårlig version (reflow - ændrer width -> CPU-belastning)
document.getElementById("reflowBtn").addEventListener("click", () => {
    document.querySelector(".box-reflow").classList.toggle("animated");
  });
  
  // optimeret version (compositing - transform på GPU)
  document.getElementById("compositeBtn").addEventListener("click", () => {
    document.querySelector(".box-composite").classList.toggle("animated");
  });