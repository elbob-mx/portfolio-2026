document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileItems = document.querySelectorAll(".mobile-nav-item");
    const langToggle = document.querySelector(".lang-toggle");
    const langLabel = document.querySelector(".lang-label");
    let stackAnimated = false;
    let currentLang = "ENG";

    const translations = {
        ESP: {
            role: "Hago diseño UX/UI.",
            // Agregamos el span directamente en la traducción
            hero1: "Creo firmemente que <span class='text-accent'>generar confianza en el usuario atendiendo sus necesidades reales es el mejor puente hacia el éxito del negocio.</span>",
            hero2: "Me especializo en transformar la complejidad operativa en experiencias fluidas y accesibles.",
            hero3: "A través de la usabilidad y sistemas de diseño escalables, maximizo los resultados financieros fortaleciendo la lealtad y seguridad de quienes usan el producto.",
            stackTitle: "/ Software Stack",
            softTitle: "/ Soft Skills",
            workTitle: "/ He estado trabajando en:",
            contactTitle: "/ Contacto",
            skillUcd: "Diseño Centrado en el Usuario",
            skillAcc: "Accesibilidad WCAG/APCA",
            skillComm: "Comunicación con Clientes",
            skillCoord: "Coordinación de Proyectos",
            probLabel: "// Problemas Detectados",
            resLabel: "// Resultados Obtenidos",
            btnView: "Ver Proyecto",
            ytDesc: "Basado en fricciones detectadas, diseñé nuevas funciones para simplificar tareas constantes.",
            ytProb: "Dificultad para navegar listas extensas, guardar contenido en varias listas y ruido visual.",
            ytRes: "Reducción de clics para guardar contenido, crear listas y mejor jerarquización general.",
            hraDesc:
                "Diseñar para la Silver Economy requiere un equilibrio entre estética premium y usabilidad extrema. Me enfoqué en reducir la fatiga de búsqueda mediante un motor de descubrimiento predictivo.",
            msDesc: "Optimización del flujo transaccional NFC para reducir errores y mejorar la legibilidad en entornos de movilidad.",
            msProb: "Flujos de recarga ambiguos y falta de distinción visual entre saldo de cuenta y crédito de tarjeta física.",
            msRes: "Implementación de un flujo de recarga de 3 pasos con feedback háptico/visual inmediato.",
            psDesc: "Showroom enfocado en clientes senior que adquieren casas de verano en Los Cabos, buscando un estilo 'beach house'.",
            nStart: "INICIO",
            nStack: "STACK",
            nWork: "TRABAJO",
            nContact: "CONTACTO",
            exp: "EXPERIMENTADO",
            prof: "PROFESIONAL",
            btn: "ENG",
        },
        ENG: {
            role: "I make UX/UI design.",
            // Agregamos el span directamente en la traducción
            hero1: "I believe that <span class='text-accent'>building user trust by addressing real needs is the most powerful bridge to achieving business goals.</span>",
            hero2: "I specialize in transforming operational complexity into seamless, accessible experiences.",
            hero3: "By leveraging usability and scalable design systems, I drive financial growth and efficiency while ensuring that every interaction strengthens the user's confidence and sense of empowerment.",
            stackTitle: "/ Software Stack",
            softTitle: "/ Soft Skills",
            workTitle: "/ I've been working on:",
            contactTitle: "/ Contact",
            skillUcd: "User-Centered Design",
            skillAcc: "WCAG/APCA Accessibility",
            skillComm: "Client Communication",
            skillCoord: "Project Coordination",
            probLabel: "// Detected Problems",
            resLabel: "// Obtained Results",
            btnView: "View Project",
            ytDesc: "Based on detected frictions, I designed new features to simplify constant tasks.",
            ytProb: "Difficulty navigating extensive playlists, save content on multiple playlists and visual noise.",
            ytRes: "Reduction in clicks to save content, create playlists and an overall better hierarchization.",
            hraDesc:
                "Redesigning for the Silver Economy requires a balance between premium aesthetics and extreme usability. I focused on reducing 'search fatigue' by implementing a predictive discovery engine.",
            msDesc: "Optimization of the NFC transactional flow to reduce user errors and improve readability in high mobility environments.",
            msProb: "Ambiguous recharge flows and lack of visual distinction between account balance and physical card credit.",
            msRes: "Implementation of a streamlined 3-step recharge flow with immediate NFC haptic/visual feedback.",
            psDesc: "Showroom that appealed to senior clients buying summer homes in Los Cabos, seeking 'beach house' style furniture.",
            nStart: "START",
            nStack: "STACK",
            nWork: "WORK",
            nContact: "CONTACT",
            exp: "EXPERIENCED",
            prof: "PROFICIENT",
            btn: "ESP",
        },
    };

    function updateLanguage() {
        currentLang = currentLang === "ENG" ? "ESP" : "ENG";
        const t = translations[currentLang];

        // Usamos .innerHTML para que reconozca las etiquetas <span> dentro del texto
        document.getElementById("role").innerText = t.role;
        document.getElementById("hero-desc-1").innerHTML = t.hero1;
        document.getElementById("hero-desc-2").innerText = t.hero2;
        document.getElementById("hero-desc-3").innerText = t.hero3;

        // ... resto del código sin cambios ...
        document.getElementById("stack-title").innerText = t.stackTitle;
        document.getElementById("soft-skills-title").innerText = t.softTitle;
        document.getElementById("work-title").innerText = t.workTitle;
        document.getElementById("contact-title").innerText = t.contactTitle;
        document.getElementById("skill-ucd").innerText = t.skillUcd;
        document.getElementById("skill-acc").innerText = t.skillAcc;
        document.getElementById("skill-comm").innerText = t.skillComm;
        document.getElementById("skill-coord").innerText = t.skillCoord;
        document.getElementById("yt-desc").innerText = t.ytDesc;
        document.getElementById("yt-prob") &&
            (document.getElementById("yt-prob").innerText = t.ytProb);
        document.getElementById("yt-res") &&
            (document.getElementById("yt-res").innerText = t.ytRes);
        document.getElementById("hra-desc").innerText = t.hraDesc;
        document.getElementById("ms-desc").innerText = t.msDesc;
        document.getElementById("ms-prob") &&
            (document.getElementById("ms-prob").innerText = t.msProb);
        document.getElementById("ms-res") &&
            (document.getElementById("ms-res").innerText = t.msRes);
        document.getElementById("ps-desc").innerText = t.psDesc;
        document.querySelectorAll(".prob-label").forEach((el) => (el.innerText = t.probLabel));
        document.querySelectorAll(".res-label").forEach((el) => (el.innerText = t.resLabel));
        document.querySelectorAll(".btn-text-view").forEach((el) => (el.innerText = t.btnView));
        document.querySelectorAll(".nav-text-start").forEach((el) => (el.innerText = t.nStart));
        document.querySelectorAll(".nav-text-stack").forEach((el) => (el.innerText = t.nStack));
        document.querySelectorAll(".nav-text-work").forEach((el) => (el.innerText = t.nWork));
        document.querySelectorAll(".nav-text-contact").forEach((el) => (el.innerText = t.nContact));
        document.querySelectorAll(".skill-label").forEach((el) => {
            if (el.innerText === "EXPERIENCED" || el.innerText === "EXPERIMENTADO")
                el.innerText = t.exp;
            else if (el.innerText === "PROFICIENT" || el.innerText === "COMPETENTE")
                el.innerText = t.prof;
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
            smoothScroll(link.getAttribute("href"));
        });
    });

    // --- Observer ---
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    [...navLinks, ...mobileItems].forEach((item) => {
                        item.classList.toggle("active", item.getAttribute("href") === `#${id}`);
                    });
                    if (id === "skills" && !stackAnimated) {
                        gsap.fromTo(
                            ".software-row",
                            { opacity: 0, x: -20 },
                            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
                        );
                        stackAnimated = true;
                    }
                }
            });
        },
        { threshold: 0.4 },
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));
});
