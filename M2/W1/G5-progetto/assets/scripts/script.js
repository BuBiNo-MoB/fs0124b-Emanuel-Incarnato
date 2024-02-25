/*PER L'HEADER*/

window.addEventListener("DOMContentLoaded", function () {

    let header = document.getElementById("header");

    let sticky = header.offsetTop;

    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
});



let header = document.getElementById("header");

let button = document.getElementById("specialButton")

window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    if (scrollY > 475.67999267578125) {
        header.style.backgroundColor = "white";
        button.style.backgroundColor = "green";
    } else {
        header.style.backgroundColor = "#FFC017";
        button.style.backgroundColor = "black";
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 475.67999267578125) {
        header.classList.remove("fade");
    } else {
        header.classList.add("fade");
    }
});




/*PER IL FOOTER*/

let footer = document.querySelector("footer");
let sticky = footer.offsetTop;

window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    if (scrollY > 880.6799926757812) {
        footer.classList.add("sticky2");
    } else {
        footer.classList.remove("sticky2");
    }
});