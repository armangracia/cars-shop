let currentSlide = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[currentSlide - 1].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}

// Show the initial slide
showSlide(currentSlide);
