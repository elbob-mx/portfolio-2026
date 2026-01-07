document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileItems = document.querySelectorAll(".mobile-nav-item");
    const langToggle = document.querySelector(".lang-toggle");
    let stackAnimated = false;
    let currentLang = "ESP";

    // --- TRADUCCIONES ---
    const translations = {
        ESP: {
            hero: "En mis 15 años como diseñador, sé que el diseño no es solo cómo se ve, ayuda a entender.",
            storyTitle: "// Narrativa",
            storyDesc:
                "Transformo problemas complejos en soluciones que se sienten naturales. Mi enfoque no se basa en suposiciones, sino en evidencia.",
            stackTitle: "// Software Stack",
            workTitle: "// Trabajo Seleccionado",
            projectDesc:
                "Basado en fricciones detectadas, diseñé nuevas funciones para simplificar tareas constantes.",
        },
        ENG: {
            hero: "In my 15 years as a designer, I know that design is not just about looks, it helps to understand.",
            storyTitle: "// Narrative",
            storyDesc:
                "I transform complex problems into solutions that feel natural. My approach is not based on assumptions, but on evidence.",
            stackTitle: "// Software Stack",
            workTitle: "// Selected Work",
            projectDesc:
                "Based on detected frictions, I designed new features to simplify constant tasks.",
        },
    };

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

    function updateLanguage() {
        const t = translations[currentLang];
        document.getElementById("hero-desc").innerText = t.hero;
        document.getElementById("story-title").innerText = t.storyTitle;
        document.getElementById("story-desc").innerText = t.storyDesc;
        document.getElementById("stack-title").innerText = t.stackTitle;
        document.getElementById("work-title").innerText = t.workTitle;
        document.getElementById("project-desc").innerText = t.projectDesc;
        document.querySelector(".lang-label").innerText = currentLang;
    }

    // --- EVENTOS ---
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "ESP" ? "ENG" : "ESP";
        updateLanguage();
    });

    [...navLinks, ...mobileItems].forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            smoothScroll(targetId);
        });
    });

    // --- INTERSECTION OBSERVER (PARA EL INDICADOR ACTIVO) ---
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");

                    // Actualizar ambos Navs (Desktop y Mobile)
                    [...navLinks, ...mobileItems].forEach((item) => {
                        item.classList.remove("active");
                        if (item.getAttribute("href") === `#${id}`) {
                            item.classList.add("active");
                        }
                    });

                    // Animación Stack
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
