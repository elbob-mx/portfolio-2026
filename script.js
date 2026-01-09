document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileItems = document.querySelectorAll(".mobile-nav-item");
    const langToggle = document.querySelector(".lang-toggle");
    const langLabel = document.querySelector(".lang-label");
    let stackAnimated = false;

    let currentLang = "ENG";

    const translations = {
        ESP: {
            role: "Hago diseño UX/UI (entre otras cosas 😎)",
            hero: "Con más de 15 años de experiencia, he aprendido que el diseño trasciende la estética; <span class='text-accent'>es el puente estratégico entre los objetivos comerciales y las necesidades de los usuarios.</span> Mi objetivo es crear productos que generen resultados y al mismo tiempo hagan que el usuario se sienta comprendido y empoderado. <span class='text-accent'>Gracias por estar aquí 😁</span>",
            storyTitle: "/ Mindset",
            storyDesc:
                "Creo que un gran diseño es el resultado de una comprensión profunda. Transformo desafíos complejos en experiencias intuitivas al <span class='text-accent'>alinear las necesidades del usuario con los objetivos comerciales,</span> utilizando los datos como brújula y la empatía como herramienta para crear soluciones que se sienten como algo natural.",
            stackTitle: "/ Software Stack",
            softTitle: "/ Soft Skills",
            workTitle: "/ He estado trabajando en:",
            contactTitle: "/ Contacto",

            // Labels genéricos de Cards
            probLabel: "// Problemas Detectados",
            resLabel: "// Resultados Obtenidos",
            btnView: "Ver Proyecto",
            btnSite: "Ver Sitio",

            // Contenido específico YouTube
            ytDesc: "Basado en fricciones detectadas, diseñé nuevas funciones para simplificar tareas constantes.",
            ytProb: "Dificultad para navegar listas extensas, guardar contenido en varias listas y ruido visual.",
            ytRes: "Reducción de clics para guardar contenido, crear listas y mejor jerarquización general.",

            // Contenido específico Mi Saldo
            msDesc: "Optimización del flujo transaccional NFC para reducir errores y mejorar la legibilidad en entornos de alta movilidad.",
            msProb: "Flujos de recarga ambiguos y falta de distinción visual entre saldo de cuenta y crédito de tarjeta física.",
            msRes: "Implementación de un flujo de recarga de 3 pasos con feedback háptico/visual inmediato.",

            // Contenido específico Parasol
            psDesc: "El cliente necesitaba una sala de exposición que atrajera a clientes mayores que compraban casas de verano en Los Cabos, México, y buscaban muebles estilo 'casa de playa'. Para proteger su economía, establecimos un cronograma quincenal en el que edito y subo entre 10 y 15 imágenes, evitando un gran costo inicial.",

            // Navs
            nStart: "INICIO",
            nStory: "MINDSET",
            nStack: "STACK",
            nWork: "TRABAJO",
            nContact: "CONTACTO",

            // Skills Labels
            exp: "EXPERIMENTADO",
            prof: "COMPETENTE",
            btn: "ENG",
        },
        ENG: {
            role: "I make UX/UI design (among others 😎)",
            hero: "With 15+ years of experience, I’ve learned that design transcends aesthetics; it is the <span class='text-accent'>strategic bridge between business goals and user needs.</span> My focus is creating products that drive results while making the user feel understood and empowered. <span class='text-accent'>Thanks for being here 😁</span>",
            storyTitle: "/ Mindset",
            storyDesc:
                "I believe that great design is the result of deep understanding. I transform complex challenges into intuitive experiences by <span class='text-accent'>aligning user needs with business goals,</span> using data as a compass and empathy as a tool to create solutions that feel second nature.",
            stackTitle: "/ Software Stack",
            softTitle: "/ Soft Skills",
            workTitle: "/ I've been working on:",
            contactTitle: "/ Contact",

            // Labels genéricos de Cards
            probLabel: "// Detected Problems",
            resLabel: "// Obtained Results",
            btnView: "View Project",
            btnSite: "View Site",

            // Contenido específico YouTube
            ytDesc: "Based on detected frictions, I designed new features to simplify constant tasks.",
            ytProb: "Difficulty navigating extensive playlists, save content on multiple playlists and visual noise.",
            ytRes: "Reduction in clicks to save content, create playlists and an overall better hierarchization.",

            // Contenido específico Mi Saldo
            msDesc: "Optimization of the NFC transactional flow to reduce user errors and improve readability in high mobility environments.",
            msProb: "Ambiguous recharge flows and lack of visual distinction between account balance and physical card credit.",
            msRes: "Implementation of a streamlined 3-step recharge flow with immediate NFC haptic/visual feedback.",

            // Contenido específico Parasol
            psDesc: "The client needed a showroom that appealed to senior clients buying summer homes in Los Cabos, Mexico, seeking 'beach house' style furniture. To protect her economy, we set a bi-weekly schedule where I edit and upload 10-15 images, avoiding a single large upfront cost.",

            // Navs
            nStart: "START",
            nStory: "MINDSET",
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
        document.getElementById("role").innerHTML = t.role;
        document.getElementById("hero-desc").innerHTML = t.hero;
        document.getElementById("story-title").innerText = t.storyTitle;
        document.getElementById("story-desc").innerHTML = t.storyDesc;
        document.getElementById("stack-title").innerText = t.stackTitle;
        document.getElementById("soft-skills-title").innerText = t.softTitle;
        document.getElementById("work-title").innerText = t.workTitle;
        document.getElementById("contact-title").innerText = t.contactTitle;

        // Traducciones de Project Cards (IDs Únicos)
        document.getElementById("yt-desc").innerText = t.ytDesc;
        document.getElementById("yt-prob").innerText = t.ytProb;
        document.getElementById("yt-res").innerText = t.ytRes;

        document.getElementById("ms-desc").innerText = t.msDesc;
        document.getElementById("ms-prob").innerText = t.msProb;
        document.getElementById("ms-res").innerText = t.msRes;

        document.getElementById("ps-desc").innerText = t.psDesc;

        // Labels compartidos (Clases)
        document.querySelectorAll(".prob-label").forEach((el) => (el.innerText = t.probLabel));
        document.querySelectorAll(".res-label").forEach((el) => (el.innerText = t.resLabel));
        document.querySelectorAll(".btn-text-view").forEach((el) => (el.innerText = t.btnView));
        document.querySelectorAll(".btn-text-site").forEach((el) => (el.innerText = t.btnSite));

        // Navbars
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

    // --- Observer ---
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
                            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
                        );
                        stackAnimated = true;
                    }
                }
            });
        },
        { threshold: 0.4 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));
});
