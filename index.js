// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide() {
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(showSlide, 5000);

// Smooth navbar highlight
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "#0b132b";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(11, 19, 43, 0.95)";
        navbar.style.boxShadow = "none";
    }
});