let current = 0;
const slides = document.querySelectorAll('.slide');

function goTo(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
}

const lang = navigator.language || navigator.userLanguage;
const isPt = lang.startsWith('pt');
const onPtPage = window.location.pathname.endsWith('index-pt.html');
const onEnPage = window.location.pathname.endsWith('index.html');

if (isPt && !onPtPage) {
  window.location.replace('index-pt.html');
} else if (!isPt && !onEnPage) {
  window.location.replace('index.html');
}