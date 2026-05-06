const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('slide-ativo', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('ativo', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = Number(dot.dataset.index);
        showSlide(index);
    });
});

setInterval(nextSlide, 4000);