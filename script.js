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

// *********** SERVICES DOM FUNCTIONS ************
const viewButtons = document.querySelectorAll(".show-more-btn");
const services = [
    document.querySelectorAll(".hidden-serv1"),
    document.querySelectorAll(".hidden-serv2"),
    document.querySelectorAll(".hidden-serv3"),
];

viewButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        services[index].forEach((p) => {
            p.classList.toggle("hidden");
        });

        button.textContent =
            button.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
    });
});

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
