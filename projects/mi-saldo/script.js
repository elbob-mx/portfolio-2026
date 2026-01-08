let currentSection = 0;
const sections = document.querySelectorAll(".section-page");
const totalSections = sections.length;
let isScrolling = false;

const navHint = document.getElementById("navigation-hint");
const backToTopBtn = document.getElementById("back-to-top");

// --- Configuración de Idioma ---
let currentLang = "en";
const langToggle = document.getElementById("lang-toggle");
const langFlagContainer = document.getElementById("lang-flag-container");

const flags = {
    es: "https://flagcdn.com/w80/mx.png",
    en: "https://flagcdn.com/w80/us.png",
};

function updateLanguage() {
    const flagToShow = currentLang === "en" ? flags.es : flags.en;
    langFlagContainer.innerHTML = `<img src="${flagToShow}" class="w-full h-full object-cover">`;

    document.querySelectorAll(".translate").forEach((el) => {
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
}

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    updateLanguage();
});

// --- Configuración de Tema ---
// Iniciamos en FALSE para que el light-theme sea el predeterminado
let isDark = false;
const themeToggle = document.getElementById("theme-toggle");
const themeIconContainer = document.getElementById("theme-icon-container");

function updateTheme() {
    document.body.className = isDark ? "dark-theme dark" : "light-theme";
    themeIconContainer.innerHTML = isDark
        ? `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
        : `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
}

themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    updateTheme();
});

// --- Interfaz de Navegación ---
function updateNavigationUI() {
    if (currentSection === totalSections - 1) {
        navHint.style.opacity = "0";
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.pointerEvents = "auto";
    } else {
        navHint.style.opacity = "1";
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.pointerEvents = "none";
    }
}

// --- Navegación GSAP ---
function goToSection(index) {
    if (index < 0 || index >= totalSections || isScrolling) return;

    isScrolling = true;
    currentSection = index;
    updateNavigationUI();

    gsap.to(window, {
        duration: 1,
        scrollTo: { y: sections[index], autoKill: false },
        ease: "power4.inOut",
        onComplete: () => {
            isScrolling = false;
        },
    });
}

// Eventos
window.addEventListener(
    "wheel",
    (e) => {
        if (isScrolling) return;
        if (e.deltaY > 0) goToSection(currentSection + 1);
        else goToSection(currentSection - 1);
    },
    { passive: false }
);

window.addEventListener("keydown", (e) => {
    if (isScrolling) return;
    if (e.key === "ArrowDown") goToSection(currentSection + 1);
    else if (e.key === "ArrowUp") goToSection(currentSection - 1);
});

let touchStart = 0;
window.addEventListener("touchstart", (e) => {
    touchStart = e.touches[0].clientY;
});
window.addEventListener("touchend", (e) => {
    const touchEnd = e.changedTouches[0].clientY;
    if (isScrolling) return;
    if (touchStart - touchEnd > 50) goToSection(currentSection + 1);
    else if (touchEnd - touchStart > 50) goToSection(currentSection - 1);
});

// Inicialización
updateLanguage();
updateTheme();
updateNavigationUI();
