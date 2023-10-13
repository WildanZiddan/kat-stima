$(document).ready(function () {
  var state = false;

  // Function to toggle the responsive menu
  function toggleNav() {
    $("#nav-icon3").toggleClass("open");
    if (!state) {
      $(".nav_r").css("transform", "translate3d(0,0,0)");
      state = true;
    } else {
      $(".nav_r").css("transform", "translate3d(-100%,0,0)");
      state = false;
    }
  }

  // Click event for the hamburger icon
  $("#nav-icon3").click(function () {
    toggleNav();
  });

  // Click event for responsive menu links
  $(".navbar-responsive__link a").click(function () {
    toggleNav();
  });
});

let currentSlide = 1;
  const totalSlides = 4; // Update this to the total number of slides
  const slideDuration = 3500; // 3 seconds

  function goToNextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;

    // Remove the 'active' class from all navigation buttons
    const navigationButtons = document.querySelectorAll('.carousel__navigation-button');
    navigationButtons.forEach(button => {
      button.classList.remove('active');
    });

    // Add the 'active' class to the current navigation button
    const currentButton = document.querySelector(`.carousel__navigation-button[href="#carousel__slide${currentSlide}"]`);
    currentButton.classList.add('active');

    location.href = `#carousel__slide${currentSlide}`;
  }

  // Start the auto-advance
  const autoAdvanceInterval = setInterval(goToNextSlide, slideDuration);

  // Clear the interval when user interacts with the carousel
  document.querySelector('.carousel__viewport').addEventListener('mouseover', () => {
    clearInterval(autoAdvanceInterval);
  });

  // Resume auto-advance when the user is not interacting with the carousel
  document.querySelector('.carousel__viewport').addEventListener('mouseout', () => {
    autoAdvanceInterval = setInterval(goToNextSlide, slideDuration);
  });