window.addEventListener("resize", () => {
  if (window.innerHeight > 768) {
    document.querySelector(".navbar").classList.remove("fixed-bottom");
  } else {
    document.querySelector(".navbar").classList.add("fixed-bottom");
  }
});
