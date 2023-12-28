// "use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// const contactForm = document.querySelector(".contact-form");
// const btnSubmitMsg = document.querySelector(".btn-submit-msg");

hamburger.addEventListener("click", () => {
    console.log("clicked");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// *********  MORE ABOUT  ***********

const moreAboutMe = document.querySelector(".modal-about-me");
const moreServ1 = document.querySelector(".modal-serv1");
const moreServ2 = document.querySelector(".modal-serv2");
const moreServ3 = document.querySelector(".modal-serv3");

const btnOpenMoreAboutMe = document.querySelector(".btn-more-about-me");
const btnOpenMoreServ1 = document.querySelector(".btn-more-serv1");
const btnOpenMoreServ2 = document.querySelector(".btn-more-serv2");
const btnOpenMoreServ3 = document.querySelector(".btn-more-serv3");

const btnCloseMoreAboutMe = document.querySelector(".btn-close-modal-about-me");
const btnCloseServ1 = document.querySelector(".btn-close-modal-serv1");
const btnCloseServ2 = document.querySelector(".btn-close-modal-serv2");
const btnCloseServ3 = document.querySelector(".btn-close-modal-serv3");

function hideButton(x) {
    x.style.display = "none";
}

function showText() {
    moreServ2.classList.remove("hidden");
}

// *********** OPEN FUNCTIONS ************

btnOpenMoreAboutMe.addEventListener("click", function () {
    console.log("cliked");
    moreAboutMe.classList.remove("hidden");
});

btnOpenMoreServ1.addEventListener("click", function () {
    moreServ1.classList.remove("hidden");
});
// btnOpenMoreServ2.addEventListener("click", function () {
//     moreServ2.classList.remove("hidden");
// });

btnOpenMoreServ3.addEventListener("click", function () {
    moreServ3.classList.remove("hidden");
});

// ***********  CLOSING FUNCTIONS ****************

btnCloseMoreAboutMe.addEventListener("click", function () {
    moreAboutMe.classList.add("hidden");
});

btnCloseServ1.addEventListener("click", function () {
    moreServ1.classList.add("hidden");
});
btnCloseServ2.addEventListener("click", function () {
    moreServ2.classList.add("hidden");
    btnOpenMoreServ2.style.display = "block";
});
btnCloseServ3.addEventListener("click", function () {
    moreServ3.classList.add("hidden");
});
