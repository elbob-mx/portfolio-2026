document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileItems = document.querySelectorAll(".mobile-nav-item");
    const langToggle = document.querySelector(".lang-toggle");
    const langLabel = document.querySelector(".lang-label");
    let stackAnimated = false;

    // Estado inicial: La página carga en Inglés, el botón ofrece cambiar a ESP
    let currentLang = "ENG";

    const translations = {
        ESP: {
            hero: "En mis 15 años como diseñador, sé que el diseño no es solo cómo se ve, ayuda a entender.",
            storyTitle: "// Narrativa",
            storyDesc:
                "Transformo problemas complejos en soluciones que se sienten naturales. Mi enfoque no se basa en suposiciones, sino en evidencia.",
            stackTitle: "// Software Stack",
            workTitle: "// Trabajo Seleccionado",
            contactTitle: "// Contacto",
            projectDesc:
                "Basado en fricciones detectadas, diseñé nuevas funciones para simplificar tareas constantes.",
            probTitle: "// Problemas Detectados",
            resTitle: "// Resultados Obtenidos",
            btnView: "Ver Proyecto",
            // Navs
            nStart: "INICIO",
            nStory: "HISTORIA",
            nStack: "STACK",
            nWork: "TRABAJO",
            nContact: "CONTACTO",
            // Skills Labels
            exp: "EXPERIMENTADO",
            prof: "COMPETENTE",
            btn: "ENG",
        },
        ENG: {
            hero: "In my 15 years as a designer, I know that design is not just about looks, it helps to understand.",
            storyTitle: "// Narrative",
            storyDesc:
                "I transform complex problems into solutions that feel natural. My approach is not based on assumptions, but on evidence.",
            stackTitle: "// Software Stack",
            workTitle: "// Selected Work",
            contactTitle: "// Contact",
            projectDesc:
                "Based on detected frictions, I designed new features to simplify constant tasks.",
            probTitle: "// Detected Problems",
            resTitle: "// Obtained Results",
            btnView: "View Project",
            // Navs
            nStart: "START",
            nStory: "STORY",
            nStack: "STACK",
            nWork: "WORK",
            nContact: "CONTACT",
            // Skills Labels
            exp: "EXPERIENCED",
            prof: "PROFICIENT",
            btn: "ESP",
        },
    };

    function updateLanguage() {
        currentLang = currentLang === "ENG" ? "ESP" : "ENG";
        const t = translations[currentLang];

        // Textos de Secciones
        document.getElementById("hero-desc").innerText = t.hero;
        document.getElementById("story-title").innerText = t.storyTitle;
        document.getElementById("story-desc").innerText = t.storyDesc;
        document.getElementById("stack-title").innerText = t.stackTitle;
        document.getElementById("work-title").innerText = t.workTitle;
        document.getElementById("contact-title").innerText = t.contactTitle;

        // Project Card
        document.getElementById("project-desc").innerText = t.projectDesc;
        document.getElementById("prob-title").innerText = t.probTitle;
        document.getElementById("res-title").innerText = t.resTitle;
        document.getElementById("btn-view").innerText = t.btnView;

        // Navbars (Busca en ambos navs usando clases compartidas)
        document.querySelectorAll(".nav-text-start").forEach((el) => (el.innerText = t.nStart));
        document.querySelectorAll(".nav-text-story").forEach((el) => (el.innerText = t.nStory));
        document.querySelectorAll(".nav-text-stack").forEach((el) => (el.innerText = t.nStack));
        document.querySelectorAll(".nav-text-work").forEach((el) => (el.innerText = t.nWork));
        document.querySelectorAll(".nav-text-contact").forEach((el) => (el.innerText = t.nContact));

        // Software Stack Labels
        document.querySelectorAll(".skill-label").forEach((el) => {
            if (el.innerText === "EXPERIENCED" || el.innerText === "EXPERIMENTADO") {
                el.innerText = t.exp;
            } else if (el.innerText === "PROFICIENT" || el.innerText === "COMPETENTE") {
                el.innerText = t.prof;
            }
        });

        langLabel.innerText = t.btn;
    }

    langToggle.addEventListener("click", updateLanguage);

    // --- Navegación y Scroll ---
    function smoothScroll(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: target, autoKill: false },
                ease: "power4.inOut",
            });
        }
    }

    [...navLinks, ...mobileItems].forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            smoothScroll(targetId);
        });
    });

    // --- Observer para estados activos ---
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    [...navLinks, ...mobileItems].forEach((item) => {
                        item.classList.remove("active");
                        if (item.getAttribute("href") === `#${id}`) {
                            item.classList.add("active");
                        }
                    });

                    if (id === "skills" && !stackAnimated) {
                        gsap.fromTo(
                            ".software-row",
                            { opacity: 0, x: -20 },
                            { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
                        );
                        stackAnimated = true;
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));
});
