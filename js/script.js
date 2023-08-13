// Hamburger Menu ----------------------------------------------
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
// ------------------------------------------------------------

// Mobile Slideshow -----------------------------------------------------------
const allSlides = document.querySelectorAll(".slide-track>div");
const slides = [allSlides[0], allSlides[1], allSlides[2], allSlides[3]];

const dots = document.querySelectorAll(".dot");

let previousSlide;
let auto = 10;

// Showing Carousel In Mobile And Tablet Devices.
if (window.matchMedia("(max-width: 768px)").matches) {
  showSlide(1);
}

function showSlide(n) {
  // Exiting If Clicked On The Present Slide.
  if (previousSlide === n) {
    return;
  }

  // Clearing Previous Timeout when Clicked on Circles
  clearTimeout(auto);

  // Hiding Previous One.
  if (previousSlide) {
    slides[previousSlide - 1].classList.toggle("hidden");
    slides[previousSlide - 1].classList.toggle("flex");
    slides[previousSlide - 1].classList.toggle("fade");

    dots[previousSlide - 1].classList.toggle("active");
  }
  previousSlide = n;

  // Unhiding New One
  slides[n - 1].classList.toggle("hidden");
  slides[n - 1].classList.toggle("flex");
  slides[n - 1].classList.toggle("fade");

  dots[n - 1].classList.toggle("active");

  // Auto Move
  let nextSlide = (previousSlide + 1) % 4 === 0 ? 4 : (previousSlide + 1) % 4;
  auto = setTimeout(() => showSlide(nextSlide), 5000);
}
//  ---------------------------------------------------------------------------

// Handling TouchMove for Changing Slides ---------------------------------
const slideArea = document.getElementById("carousel");
let touchLine = [];

slideArea.addEventListener("touchstart", (e) => {
  touchLine[0] = e.touches[0];
});

slideArea.addEventListener("touchend", (e) => {
  touchLine[1] = e.changedTouches[0];
  checkSwipe();
});

function checkSwipe() {
  if (Math.abs(touchLine[0].clientX - touchLine[1].clientX) > 50) {
    if (touchLine[0].clientX < touchLine[1].clientX) {
      changeSlide("right");
    } else {
      changeSlide("left");
    }
  }
}

function changeSlide(direction) {
  if (direction === "right") {
    showSlide((previousSlide - 1) % 4 === 0 ? 4 : (previousSlide - 1) % 4);
  } else {
    showSlide((previousSlide + 1) % 4 === 0 ? 4 : (previousSlide + 1) % 4);
  }
}
//  -----------------------------------------------------------------------

// Showing Error for Invalid Email ----------------------------
const emailInput = document.getElementById("email-inp");
const errorPara = document.getElementById("err-text");

emailInput.addEventListener("keyup", (e) => {
  if (!e.target.validity.valid) {
    errorPara.textContent = "Please insert a valid email";
  } else {
    errorPara.textContent = "";
  }
});
// ------------------------------------------------------------
