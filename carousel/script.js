const leftNav = document.querySelector("#left");
const rightNav = document.querySelector("#right");
const images = document.querySelectorAll(".carousel-image");
const navdots = document.querySelectorAll(".navdot")
const currentImage = document.querySelector(".active");
navdots[currentImage.id - 1].src = "./images/dot-filled.svg"

leftNav.addEventListener("click", (e) => {
  const currentImage = document.querySelector(".active");
  prevImage = currentImage.id == 1 ? images[4] : images[currentImage.id - 2]
  currentImage.classList.toggle("active");
  prevImage.classList.toggle("active");
  navdots[currentImage.id].src = "./images/dot-hollow.svg"
  navdots[currentImage.id - 1].src = "./images/dot-filled.svg"
});

rightNav.addEventListener("click", (e) => {
  const currentImage = document.querySelector(".active");
  nextImage = currentImage.id == 5 ? images[0] : images[currentImage.id]
  currentImage.classList.toggle("active");
  nextImage.classList.toggle("active");
  navdots[currentImage.id].src = "./images/dot-hollow.svg"
  navdots[currentImage.id - 1].src = "./images/dot-filled.svg"
});
