let current = 0;
const slides = document.querySelectorAll('.slide');

function goTo(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
}

const lang = navigator.language || navigator.userLanguage;
if (lang.startsWith('pt')) {
  window.location.replace('index-pt.html');
} else {
  window.location.replace('index.html')
}