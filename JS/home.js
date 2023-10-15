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

var slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-thumbnail");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  console.log(slideIndex);

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // slides[i].style.display = "inline";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}