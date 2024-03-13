document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[currentSlide].classList.add("active");
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(showSlide, 2000); // 2초마다 슬라이드 전환
});
