
//JavaScript para o Menu Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//JavaScrip Para o Slider
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;

function nextSlide() {
  if (counter < 2) {
    counter++;
    slides.style.transform = `translateX(-${counter * 20}%)`;
  }
}

function prevSlide() {
  if (counter > 0) {
    counter--;
    slides.style.transform = `translateX(-${counter * 20}%)`;
  }
}
