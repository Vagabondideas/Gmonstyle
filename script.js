// "use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-main-menu");

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

// btnSubmitMsg.addEventListener("click", function () {
//     contactForm.style.visibility = "hidden";
// });
