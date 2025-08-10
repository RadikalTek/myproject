let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  slideIndex += n;
  resetTimer();
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  resetTimer();
  showSlides(slideIndex);
}

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 3000);
}

// شروع اسلایدر با نمایش اولین اسلاید و راه‌اندازی تایمر
window.onload = function() {
  showSlides(slideIndex);
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 3000);
};

