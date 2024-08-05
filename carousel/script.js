const leftNav = document.querySelector("#left");
const rightNav = document.querySelector("#right");
const images = document.querySelectorAll(".carousel-image");

leftNav.addEventListener("click", (e) => {
  const currentImage = document.querySelector(".active");

});

rightNav.addEventListener("click", (e) => {
  const currentImage = document.querySelector(".active");
  currentImage.classList.toggle("active");
  currentImage.nextSibling.classList.toggle("active");
});
