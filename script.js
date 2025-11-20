console.log("Portfolio Loaded Successfully.");

const whoami = document.querySelector(".access-line");
const typingEl = document.querySelector(".typing");
const mainContent = document.getElementById("main-content");
const siteContent = document.getElementById("site-content");
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

// Detect if we are on index page
const isIndex =
    whoami !== null &&
    typingEl !== null &&
    mainContent !== null &&
    siteContent !== null;

const firstVisit = !sessionStorage.getItem("visitedBefore");

// -----------------------------
// INDEX PAGE ANIMATION HANDLING
// -----------------------------
if (isIndex) {
    const whoamiDelay = 1400;
    const typingDuration = 2500;
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
        // No animation, show instantly
        whoami.style.animation = "none";
        whoami.style.opacity = "1";

        mainContent.style.opacity = "1";
        siteContent.style.opacity = "1";

        menuBtn.classList.add("show-menu");

        typingEl.classList.remove("start-typing");
        typingEl.classList.add("instant");
        typingEl.innerText = "Hasan Malek";
    }
}

// -----------------------------
// OTHER PAGES (NO ANIMATION)
// -----------------------------
else {
    // Immediately show hamburger menu
    if (menuBtn) {
        menuBtn.classList.add("show-menu");
    }
}

// -----------------------------
// MOBILE MENU FUNCTIONS
// -----------------------------
function openMenu() {
    if (mobileMenu && menuBtn) {
        mobileMenu.style.display = "flex";
        mobileMenu.setAttribute("aria-hidden", "false");
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
    }
}

function closeMenu() {
    if (mobileMenu && menuBtn) {
        mobileMenu.style.display = "none";
        mobileMenu.setAttribute("aria-hidden", "true");

        // Only show menu button again if near top
        if (window.scrollY < 50) {
            menuBtn.style.opacity = "1";
            menuBtn.style.pointerEvents = "auto";
        }
    }
}

// -----------------------------
// SCROLL BEHAVIOR
// -----------------------------
window.addEventListener("scroll", () => {
    if (!menuBtn || !mobileMenu) return;

    if (window.scrollY > 50 || mobileMenu.style.display === "flex") {
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
    } else {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    }
});

// Close menu automatically when navigating pages
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});
