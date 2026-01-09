document.addEventListener("DOMContentLoaded", () => {
    // GSAP Plugins
    gsap.registerPlugin(ScrollToPlugin);

    const langToggle = document.querySelector(".lang-toggle");
    const langLabel = document.querySelector(".lang-label");
    const themeToggle = document.getElementById("theme-toggle");
    let currentLang = "ENG";

    const ids = [
        "nav-back",
        "project-title",
        "hero-desc",
        "btn-explore",
        "btn-live",
        "story-title",
        "story-desc",
        "stat-faster",
        "stat-figma",
        "m1",
        "m2",
        "m3",
        "m4",
        "m5",
        "m6",
        "stack-title",
        "desc-vscode",
        "desc-ps",
        "desc-ai",
        "footer-cta",
        "btn-contact",
        "btn-top",
    ];

    const translations = {
        ESP: {
            "nav-back": "VOLVER",
            "project-title": "Parasol Furniture Gallery",
            "hero-desc": "Showroom digital informativo optimizado para alto impacto visual.",
            "btn-explore": "EXPLORAR PROCESO",
            "btn-live": "VER SITIO WEB",
            "story-title": "/ MINDSET",
            "story-desc":
                "Diseño 'Direct-to-Code' para maximizar el presupuesto, eliminando prototipos.",
            "stat-faster": "MÁS RÁPIDO",
            "stat-figma": "FIGMA FILES",
            m1: "Showroom para <b>clientes senior en Los Cabos</b>, México, buscando muebles estilo 'beach house'.",
            m2: "De empleada a emprendedora, con presupuesto limitado. Necesitaba <b>soluciones adaptables</b>.",
            m3: "Colaboración para <b>aterrizar sus ideas en branding</b> y guías de estilo.",
            m4: "Diseño directo con VS Code, Tailwind y Photoshop.",
            m5: "Plan quincenal para editar y cargar 10-15 imágenes.",
            m6: "Generación de assets para redes sociales con consistencia visual.",
            "stack-title": "/ SOFTWARE STACK",
            "desc-vscode": "Motor para <b>HTML, CSS, JS y Tailwind</b>.",
            "desc-ps": "Edición de <b>imágenes de producto</b>.",
            "desc-ai": "Creación de <b>logos e iconos vectoriales</b>.",
            "footer-cta": "¿Listo para optimizar tu negocio?",
            "btn-contact": "CONTACTAR",
            "btn-top": "VOLVER AL INICIO",
        },
        ENG: {
            "nav-back": "BACK",
            "project-title": "Parasol Furniture Gallery",
            "hero-desc":
                "Informative digital showroom optimized for high visual impact with a low operational budget.",
            "btn-explore": "EXPLORE PROCESS",
            "btn-live": "LIVE SITE",
            "story-title": "/ MINDSET",
            "story-desc":
                "Direct-to-Code design to maximize budget, eliminating prototypes and building directly in the browser.",
            "stat-faster": "FASTER DELIVERY",
            "stat-figma": "FIGMA FILES",
            m1: 'The client needed a showroom that appealed to <b>senior clients buying summer homes in Los Cabos</b>, Mexico, seeking "beach house" style furniture.',
            m2: "Moving from employee to entrepreneur, the client had a limited budget. She needed <b>solutions that adapted to her evolving finances</b>.",
            m3: "We collaborated closely to <b>align her design ideas into branding</b>, style guides, and store tone that matched her vision perfectly.",
            m4: "After designing with VS Code, Tailwind, and Photoshop, we moved to the <b>direct content creation phase</b>.",
            m5: "To protect her economy, we set a <b>bi-weekly schedule where I edit and upload 10-15 images</b>, avoiding a single large upfront cost.",
            m6: "Finally, we <b>generated social media assets, analyzed and approved together</b> to maintain consistency.",
            "stack-title": "/ SOFTWARE STACK",
            "desc-vscode":
                "Used as the core engine for high-speed development using <b>HTML, CSS, JavaScript, and Tailwind</b>.",
            "desc-ps": "Essential for <b>editing and adapting raw product images</b>.",
            "desc-ai": "Dedicated to <b>crafting the brand's logo from scratch</b>.",
            "footer-cta": "Ready to optimize your business?",
            "btn-contact": "GET IN TOUCH",
            "btn-top": "BACK TO TOP",
        },
    };

    function updateLanguage() {
        currentLang = currentLang === "ENG" ? "ESP" : "ENG";
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = translations[currentLang][id];
        });
        langLabel.innerText = currentLang === "ENG" ? "ESP" : "ENG";
    }

    langToggle.addEventListener("click", updateLanguage);
    themeToggle.addEventListener("click", () => document.body.classList.toggle("dark-mode"));

    window.smoothScroll = function (targetId) {
        gsap.to(window, { duration: 1, scrollTo: targetId, ease: "power2.inOut" });
    };

    // --- LÓGICA DEL CARRUSEL ---
    const container = document.getElementById("slides-container");
    const controlBtn = document.getElementById("carousel-control");
    const pauseIcon = document.getElementById("pause-icon");
    const playIcon = document.getElementById("play-icon");

    let currentIndex = 0;
    let isPaused = false;
    const totalSlides = 4;

    function nextSlide() {
        if (!isPaused) {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }
    }

    function updateCarousel() {
        if (container) container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    let slideInterval = setInterval(nextSlide, 3000);

    controlBtn.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseIcon.classList.toggle("hidden");
        playIcon.classList.toggle("hidden");

        if (isPaused) {
            clearInterval(slideInterval);
        } else {
            slideInterval = setInterval(nextSlide, 3000);
        }
    });
});
