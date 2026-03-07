let current = 0;
const slides = document.querySelectorAll('.slide');

function goTo(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
}