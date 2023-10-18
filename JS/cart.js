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
    popup.classList.toggle("active");

    setTimeout(function () {
        popup.classList.remove("active");
    }, 2000);
}

//<---------- Harga ---------->\\
var clicksparfum = 0;
var clickstoys = 0;
var hargatotal = 0;
var barang = 0;

function tambahParfum() {
    clicksparfum += 1;
    barang += 1;
    hargatotal += 2400000;
    document.getElementById("clicksparfum").innerHTML = clicksparfum;
    document.getElementById("hargatotal").innerHTML = hargatotal;
    document.getElementById("barang").innerHTML = barang;
};
function kurangParfum() {
    if (clicksparfum > 0) {
        clicksparfum -= 1;
        barang -= 1;
        hargatotal -= 2400000;
        document.getElementById("clicksparfum").innerHTML = clicksparfum;
        document.getElementById("hargatotal").innerHTML = hargatotal;
        document.getElementById("barang").innerHTML = barang;
    }    
}

function tambahToys() {
    clickstoys += 1;
    barang += 1;
    hargatotal += 33000;
    document.getElementById("clickstoys").innerHTML = clickstoys;
    document.getElementById("hargatotal").innerHTML = hargatotal;
    document.getElementById("barang").innerHTML = barang;
};
function kurangToys() {
    if (clickstoys > 0) {
        clickstoys -= 1;
        barang -= 1;
        hargatotal -= 33000;
        document.getElementById("clickstoys").innerHTML = clickstoys;
        document.getElementById("hargatotal").innerHTML = hargatotal;
        document.getElementById("barang").innerHTML = barang;
    }
}
//<----------=---------->\\