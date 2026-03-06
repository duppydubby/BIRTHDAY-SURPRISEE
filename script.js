function showMessage() {
  alert("You are amazing, Nardi! 💖🎂🎁");
}

// Simple slideshow effect (optional)
let slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].style.display = 'none';
  current = (current + 1) % slides.length;
  slides[current].style.display = 'block';
}

slides.forEach((slide, i) => {
  if (i !== 0) slide.style.display = 'none';
});

setInterval(nextSlide, 3000); // Change slide every 3 seconds