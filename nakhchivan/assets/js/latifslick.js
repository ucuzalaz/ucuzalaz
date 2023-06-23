document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slick-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slides = document.querySelectorAll(".slide");
  const slideWidth = slides[0].offsetWidth;
  let slideIndex = 0;

  prevBtn.addEventListener("click", function() {
    if (slideIndex > 0) {
      slideIndex--;
      slider.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
    }
  });

  nextBtn.addEventListener("click", function() {
    if (slideIndex < slides.length - 4) {
      slideIndex++;
      slider.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
    }
  });
});
