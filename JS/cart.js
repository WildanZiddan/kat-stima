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

var clicks = 0;
var harga = 0;
    function tambah() {
        clicks += 1;
        harga += 2400000;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("harga").innerHTML = harga;
    };
    function kurang() {
        if (clicks > 0) {
            clicks -= 1;
            harga -= 2400000;
            document.getElementById("clicks").innerHTML = clicks;
            document.getElementById("harga").innerHTML = harga;
        }    
    }