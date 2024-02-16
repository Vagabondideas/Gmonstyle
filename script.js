// "use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// *********  MORE ABOUT ME  ***********
const btnOpenMoreAboutMe = document.querySelector(".btn-more-about-me");
const modalAboutMe = document.querySelector(".modal-about-me");
const btnCloseMoreAboutMe = document.querySelector(".btn-close-modal-about-me");

function openMore() {
    modalAboutMe.classList.remove("hidden");
}
function hideBtnMore() {
    btnOpenMoreAboutMe.style.display = "none";
}
function closeMore() {
    modalAboutMe.classList.add("hidden");
}
function showMore() {
    btnOpenMoreAboutMe.style.display = "block";
}

// *********** SERVICES DOM FUNCTIONS ************
const btnOpenServ1 = document.querySelector(".open-serv1");
const modal1 = document.querySelector(".modal-1");
const btnOpenServ2 = document.querySelector(".open-serv2");
const modal2 = document.querySelector(".modal-2");
const btnOpenServ3 = document.querySelector(".open-serv3");
const modal3 = document.querySelector(".modal-3");
const btnCloseMod1 = document.querySelector(".close-modal-1");
const btnCloseMod2 = document.querySelector(".close-modal-2");
const btnCloseMod3 = document.querySelector(".close-modal-3");

// *** OPEN MODAL and Hide Button More *******
function openServ1() {
    modal1.classList.remove("hidden-1");
}
function openServ2() {
    modal2.classList.remove("hidden-2");
}
function openServ3() {
    modal3.classList.remove("hidden-3");
}

function hideBtn1() {
    btnOpenServ1.style.display = "none";
}
function hideBtn2() {
    btnOpenServ2.style.display = "none";
}
function hideBtn3() {
    btnOpenServ3.style.display = "none";
}

// *** CLOSE MODAL and Show (re-instate) Button More ***

function closeMod1() {
    modal1.classList.add("hidden-1");
}
function closeMod2() {
    modal2.classList.add("hidden-2");
}
function closeMod3() {
    modal3.classList.add("hidden-3");
}

function showBtn1() {
    btnOpenServ1.style.display = "block";
}
function showBtn2() {
    btnOpenServ2.style.display = "block";
}
function showBtn3() {
    btnOpenServ3.style.display = "block";
}

// *** POST with GETFROM NOT ACCEPTING EVENT LISTENER ********

// const form = document.querySelector(".contact-form-container");
// const acknowledged = document.querySelector(".acknowledged");
// const btnSubmit = document.querySelector(".btn-send-form");
// const inputs = document.querySelectorAll("input");
// const textarea = document.querySelector("textarea");

// btnSubmit.addEventListener("click", (e) => {
//     console.log("clicked");
//     e.preventDefault();
//     form.style.display = "none";
//     acknowledged.style.display = "block";

// });
