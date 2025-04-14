// Script untuk menggerakkan carousel secara otomatis
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Menjalankan fungsi nextSlide setiap 3 detik
setInterval(nextSlide, 3000);

