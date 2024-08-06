// toggle
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar
const Menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// carousel
const carouselImages = document.querySelector(".carousel-images");
const totalSlides = document.querySelectorAll(".carousel-item").length;
const nextButton = document.querySelector(".carousel-next");
const prevButton = document.querySelector(".carousel-prev");

let currentIndex = 0;
const slideInterval = 5000; // Interval in milliseconds

function showSlide(index) {
  const offset = -index * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

setInterval(nextSlide, slideInterval);
