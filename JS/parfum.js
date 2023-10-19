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

function showPopup() {
    const popup = document.querySelector(".popup");
    popup.classList.toggle("activenya");

    setTimeout(function () {
        popup.classList.remove("activenya");
    }, 2000);
}

function showPupop() {
    const popup = document.querySelector(".pupop");
    popup.classList.toggle("activenya");

    setTimeout(function () {
        popup.classList.remove("activenya");
    }, 2000);
}

let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let counter = document.querySelector("#counter");


let count = 0;


increase.addEventListener("click", clickEvent);
decrease.addEventListener("click", clickEvent);
function clickEvent () {
    if(this.id == "increase"){
        counter.innerHTML = count += 1
    }else{
        if(this.id == "decrease" && count > 0){
            counter.innerHTML = count -= 1;
        }
    }
}


let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");

for(let i = 0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener("mouseover", function (){
        if(activeImages.length > 0){
            activeImages[0].classList.remove("active");
        }
        this.classList.add("active")
        document.getElementById("featured").src = this.src
    })
}