/*-----------------toggle style switcher------------*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style - switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*------------theme colors------------------*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

/*------------------theme light and dark mode-----------------*/
const dayNight = document.querySelector(".day-night");

// Function to apply dark mode
function applyDarkMode() {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.remove("fa-moon-o");
    dayNight.querySelector("i").classList.add("fa-sun-o");
}

// Function to apply light mode
function applyLightMode() {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.remove("fa-sun-o");
    dayNight.querySelector("i").classList.add("fa-moon-o");
}

// Toggle dark/light mode
dayNight.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
});

// Set default mode
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

// Initial setup for dark mode as default
document.addEventListener("DOMContentLoaded", () => {
    applyDarkMode();
});
