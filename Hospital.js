const texts = ["Automated", "Connected", "Intelligent", "Efficient", "Smart"];

const typingSpeed = 100;

const deletingSpeed = 50;

const delayBetween = 1200;

const textElement = document.getElementById("text");

let textIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.textContent = currentText.substring(0, charIndex);

  let delay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentText.length) {
    delay = delayBetween;

    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;

    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Get the hero element

const hero = document.getElementById("hero");

// Listen for the 'scroll' event on the entire window

window.addEventListener("scroll", () => {
  // Get the current vertical scroll position

  const scrollPosition = window.scrollY;

  // This is the "speed" of the parallax effect.

  // 0.5 means it moves at 50% of the scroll speed.

  // You can change this value to make it faster or slower.

  const speed = 0.5;
  // Calculate the new vertical position for the background

  const newY = scrollPosition * speed;

  // Apply the new position to the background image

  // We use '50%' for the x-position (center) and newY for the y-position

  hero.style.backgroundPosition = `50% ${newY}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Select Elements ---
  const slides = document.querySelectorAll(".testimonial-slide");
  const wrapper = document.querySelector(".testimonial-wrapper");
  const btnLeft = document.querySelector(".btn--left");
  const btnRight = document.querySelector(".btn--right");
  const dotContainer = document.querySelector(".dots");

  // --- 2. State Variables ---
  let currentSlide = 0;
  const maxSlide = slides.length - 1;

  // --- 3. Functions ---

  /**
   * Creates the navigation dots based on the number of slides.
   */
  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };

  /**
   * Activates the correct dot for the current slide.
   * @param {number} slide - The index of the slide to activate.
   */
  const activateDot = (slide) => {
    // Remove 'active' class from all dots
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot--active"));
    // Add 'active' class to the matching dot
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("dot--active");
  };

  /**
   * Moves the wrapper to show the correct slide.
   * @param {number} slide - The index of the slide to go to.
   */
  const goToSlide = (slide) => {
    wrapper.style.transform = `translateX(-${100 * slide}%)`;
  };

  /**
   * Moves to the next slide.
   */
  const nextSlide = () => {
    if (currentSlide === maxSlide) {
      currentSlide = 0; // Loop back to the first slide
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  /**
   * Moves to the previous slide.
   */
  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide; // Loop back to the last slide
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // --- 4. Initialization ---

  /**
   * Sets up the carousel on page load.
   */
  const init = () => {
    createDots(); // Create the dots
    activateDot(0); // Set the first dot as active
    goToSlide(0); // Move to the first slide (just in case)
  };
  init();

  // --- 5. Event Listeners ---

  // Right Button Click
  btnRight.addEventListener("click", nextSlide);

  // Left Button Click
  btnLeft.addEventListener("click", prevSlide);

  // Keyboard Navigation (for accessibility)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  // Dot Click Navigation
  dotContainer.addEventListener("click", (e) => {
    // Check if a dot was clicked
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset; // Get slide number from data-slide attribute
      currentSlide = Number(slide);
      goToSlide(currentSlide);
      activateDot(currentSlide);
    }
  });
});
