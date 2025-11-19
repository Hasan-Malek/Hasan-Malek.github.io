console.log("Portfolio Loaded Successfully.");

const whoami = document.querySelector(".access-line");
const typingEl = document.querySelector(".typing");
const mainContent = document.getElementById("main-content");
const siteContent = document.getElementById("site-content");
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

const firstVisit = !sessionStorage.getItem("visitedBefore");

const whoamiDelay = 1400;
const typingDuration = 2500; // must match CSS animation length (2.5s)
const revealExtra = 300;
const revealTime = whoamiDelay + typingDuration + revealExtra;

if (firstVisit) {
    sessionStorage.setItem("visitedBefore", "true");

    setTimeout(() => {
        mainContent.classList.add("show");
        typingEl.classList.add("start-typing");
    }, whoamiDelay);

    setTimeout(() => {
        siteContent.classList.add("show");
        menuBtn.classList.add("show-menu");
    }, revealTime);

} else {
    whoami.style.animation = "none";
    whoami.style.opacity = "1";

    mainContent.style.opacity = "1";
    siteContent.style.opacity = "1";
    menuBtn.classList.add("show-menu");

    typingEl.classList.remove("start-typing");
    typingEl.classList.add("instant");
    typingEl.innerText = "Hasan Malek";
}

function openMenu() {
    mobileMenu.style.display = "flex";
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
    mobileMenu.style.display = "none";
    mobileMenu.setAttribute("aria-hidden", "true");
    if (window.scrollY < 50) {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 50 || mobileMenu.style.display === "flex") {
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
    } else {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    }
});