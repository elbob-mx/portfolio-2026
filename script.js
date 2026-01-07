document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollToPlugin);

    // CORRECCIÓN: Iniciamos en ENG para que coincida con el HTML físico
    let currentLang = "ENG";

    const translations = {
        ESP: {
            "nav-start": "INICIO",
            "m-nav-start": "INICIO",
            "nav-story": "HISTORIA",
            "m-nav-story": "HISTORIA",
            "nav-stack": "STACK",
            "m-nav-stack": "STACK",
            "nav-work": "TRABAJO",
            "m-nav-work": "TRABAJO",
            "nav-contact": "CONTACTO",
            "m-nav-contact": "CONTACTO",
            "hero-desc":
                "En mis 15 años como diseñador, sé que el diseño no solamente se ve, ayuda a entender.",
            "story-title": "// Narrativa",
            "story-desc":
                "Transformo problemas complejos en soluciones que se sienten naturales. Mi enfoque no se basa en suposiciones, sino en evidencia.",
            "stack-title": "// Software Stack",
            "work-title": "// Trabajo Seleccionado",
            "contact-title": "// Contacto",
            "project-1-title": "YouTube Music Redesign",
            "project-1-desc-dk":
                "A partir de fricciones detectadas, diseñe nuevas funciones para simplificar tareas constantes.",
            "project-1-desc-mb":
                "A partir de fricciones detectadas, diseñe nuevas funciones para simplificar tareas constantes.",
            "project-1-before-title-dk": "Problemas Detectados (El antes)",
            "project-1-before-title-mb": "// Problemas Detectados",
            "project-1-before-desc-dk":
                "Dificultad en la navegación de listas de reproducción extensas.",
            "project-1-before-desc-mb":
                "Dificultad en la navegación de listas de reproducción extensas.",
            "project-1-after-title-dk": "Resultados Obtenidos (El después)",
            "project-1-after-title-mb": "// Resultados Obtenidos",
            "project-1-after-desc-dk":
                "Reducción del 30% en clics para acceder a contenido favorito.",
            "project-1-after-desc-mb":
                "Reducción del 30% en clics para acceder a contenido favorito.",
            "btn-view": "Ver Proyecto",
            exp: "Experto",
            adv: "Avanzado",
            prof: "Competente",
        },
        ENG: {
            "nav-start": "START",
            "m-nav-start": "START",
            "nav-story": "STORY",
            "m-nav-story": "STORY",
            "nav-stack": "STACK",
            "m-nav-stack": "STACK",
            "nav-work": "WORK",
            "m-nav-work": "WORK",
            "nav-contact": "CONTACT",
            "m-nav-contact": "CONTACT",
            "hero-desc":
                "In my 15 years as a designer, I know that design is not just seen, it helps to understand.",
            "story-title": "// Narrative",
            "story-desc":
                "I transform complex problems into solutions that feel natural. My approach is not based on assumptions, but on evidence.",
            "stack-title": "// Software Stack",
            "work-title": "// Selected Work",
            "contact-title": "// Contact",
            "project-1-title": "YouTube Music Redesign",
            "project-1-desc-dk":
                "Based on detected frictions, I designed new features to simplify constant tasks.",
            "project-1-desc-mb":
                "Based on detected frictions, I designed new features to simplify constant tasks.",
            "project-1-before-title-dk": "Detected Problems (The before)",
            "project-1-before-title-mb": "// Detected Problems",
            "project-1-before-desc-dk": "Difficulty navigating long playlists.",
            "project-1-before-desc-mb": "Difficulty navigating long playlists.",
            "project-1-after-title-dk": "Results Obtained (The after)",
            "project-1-after-title-mb": "// Results Obtained",
            "project-1-after-desc-dk": "30% reduction in clicks to access favorite content.",
            "project-1-after-desc-mb": "30% reduction in clicks to access favorite content.",
            "btn-view": "View Project",
            exp: "Experienced",
            adv: "Advanced",
            prof: "Proficient",
        },
    };

    document.querySelectorAll(".lang-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
            // Cambiamos el idioma
            currentLang = currentLang === "ESP" ? "ENG" : "ESP";

            // El botón siempre muestra el idioma al que puedes cambiar
            const nextLabel = currentLang === "ESP" ? "ENG" : "ESP";
            document.querySelectorAll(".lang-label").forEach((el) => (el.textContent = nextLabel));

            // Traducir por ID
            Object.keys(translations[currentLang]).forEach((id) => {
                const el = document.getElementById(id);
                if (el) el.textContent = translations[currentLang][id];
            });

            // Traducir botones de proyecto por clase
            document.querySelectorAll(".project-btn-label").forEach((el) => {
                el.textContent = translations[currentLang]["btn-view"];
            });

            document.querySelectorAll(".software-level").forEach((el) => {
                const key = el.getAttribute("data-lang");
                if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
            });
        });
    });

    // Navegación suave con GSAP
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                gsap.to(window, { duration: 1, scrollTo: target, ease: "power4.out" });
            }
        });
    });

    // Animación de entrada para el Software Stack
    const stackObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.from(".software-row", {
                        opacity: 0,
                        y: 20,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: "power2.out",
                    });
                    stackObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    const stackSec = document.querySelector("#skills");
    if (stackSec) stackObserver.observe(stackSec);
});
