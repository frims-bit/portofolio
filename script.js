// Traductions
const translations = {
    fr: {
        home: 'Accueil',
        about: 'À Propos',
        skills: 'Compétences',
        projects: 'Projets',
        parcours: 'Parcours',
        contact: 'Contact',
        welcome: 'Bienvenue 👋',
        roles: ['Développeur', 'Admin Réseau', 'Passionné de la Tech'],
        heroDesc: 'Étudiant en informatique passionné par le développement web et l\'administration réseau. Je construis des solutions scalables et cherche mon premier stage professionnel au Togo.',
        viewProjects: 'Voir mes projets',
        getInTouch: 'Prenons contact',
        aboutTitle: 'Qui suis-je ?',
        aboutEducation: 'Parcours',
        aboutEducation2024: '2024 – Aujourd\'hui',
        aboutLicense: 'Licence Informatique',
        aboutIAI: 'IAI-TOGO • 2ème Année',
        aboutBac2022: '2022 – 2024',
        aboutBac: 'Baccalauréat Série D',
        aboutCS: 'CS Le Savoir de Kohe • Lomé',
        aboutMe: 'Qui je suis',
        aboutMeDesc: 'Je suis passionné par la technologie et l\'innovation. Sérieux et autonome, j\'aime résoudre des problèmes complexes et apprendre continuellement.',
        aboutMeDesc2: 'En parallèle de mes études, je m\'intéresse aux tendances technologiques, la cybersécurité et l\'IA. Je suis à la recherche de mon premier stage pour mettre en pratique mes connaissances.',
        skillsTitle: 'Mes Capacités',
        webDev: 'Développement Web',
        backend: 'Backend & Mobile',
        sysadmin: 'Sysadmin & Réseau',
        tools: 'Tools & Méthodologie',
        tech: 'Technologies',
        projectsTitle: 'Réalisations Récentes',
        elearning: 'Plateforme E-Learning',
        elearningDesc: 'Application complète pour la gestion de cours en ligne, intégrant un système d\'authentification et un tableau de bord administrateur.',
        adminMonitor: 'Administration & Monitoring',
        adminMonitorDesc: 'Ensemble de scripts permettant d\'automatiser le déploiement, la sauvegarde et la surveillance de serveurs Linux.',
        collaborate: 'Collaborons.',
        collaborateDesc: 'Une opportunité de stage, d\'alternance ou un projet d\'infrastructure à discuter ? Retrouvez-moi sur mes réseaux.',
        rights: '© 2026 RYAN ANZOUMANA. TOUS DROITS RÉSERVÉS.'
    },
    en: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        parcours: 'Journey',
        contact: 'Contact',
        welcome: 'Welcome 👋',
        roles: ['Developer', 'Network Admin', 'Tech Enthusiast'],
        heroDesc: 'Computer science student passionate about web development and network administration. I build scalable solutions and am seeking my first professional internship in Togo.',
        viewProjects: 'View my projects',
        getInTouch: 'Let\'s get in touch',
        aboutTitle: 'Who am I?',
        aboutEducation: 'Journey',
        aboutEducation2024: '2024 – Now',
        aboutLicense: 'Computer Science License',
        aboutIAI: 'IAI-TOGO • 2nd Year',
        aboutBac2022: '2022 – 2024',
        aboutBac: 'Bachelor\'s Degree - Science',
        aboutCS: 'CS Le Savoir de Kohe • Lome',
        aboutMe: 'About Me',
        aboutMeDesc: 'I\'m passionate about technology and innovation. Serious and independent, I love solving complex problems and learning continuously.',
        aboutMeDesc2: 'Alongside my studies, I\'m interested in technology trends, cybersecurity and AI. I\'m looking for my first internship to put my knowledge into practice.',
        skillsTitle: 'My Skills',
        webDev: 'Web Development',
        backend: 'Backend & Mobile',
        sysadmin: 'Sysadmin & Network',
        tools: 'Tools & Methodology',
        tech: 'Technologies',
        projectsTitle: 'Recent Work',
        elearning: 'E-Learning Platform',
        elearningDesc: 'Complete application for managing online courses, integrating an authentication system and an administrator dashboard.',
        adminMonitor: 'Administration & Monitoring',
        adminMonitorDesc: 'Set of scripts to automate deployment, backup and monitoring of Linux servers.',
        collaborate: 'Let\'s Collaborate.',
        collaborateDesc: 'An internship opportunity, work-study program or infrastructure project to discuss? Find me on my networks.',
        rights: '© 2026 RYAN ANZOUMANA. ALL RIGHTS RESERVED.'
    }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    updatePageContent();
    updateLangButton();
}

function updateLangButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }
}

function updatePageContent() {
    const t = translations[currentLang];
    // Vous pouvez ajouter plus de traductions ici selon vos besoins
    // Pour l'instant, les éléments clés sont directement dans le HTML
}

document.addEventListener('DOMContentLoaded', () => {
    updateLangButton();
});

// Intro Loader
const introLoader = document.getElementById('intro-loader');
if (introLoader) {
    setTimeout(() => {
        introLoader.classList.add('fade-out');
        setTimeout(() => introLoader.remove(), 700);
    }, 2600);
}

// Typewriter Effect
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
    const phrases = translations[currentLang].roles;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typewrite() {
        const current = phrases[phraseIndex];

        if (!isDeleting) {
            typewriterEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(typewrite, 1800);
                return;
            }
            setTimeout(typewrite, 80);
        } else {
            typewriterEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typewrite, 400);
                return;
            }
            setTimeout(typewrite, 40);
        }
    }

    setTimeout(typewrite, 3200);
}

// Language Toggle
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
    });
}

// Theme Toggle avec localStorage
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    htmlElement.classList.add('dark');
    htmlElement.classList.remove('light');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.classList.contains('dark');
        
        if (isDark) {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });
}

// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Scroll Reveal + Skill bars
const revealedSet = new WeakSet();

function reveal() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');

            if (!revealedSet.has(el)) {
                revealedSet.add(el);
                const skillFills = el.querySelectorAll('.skill-fill');
                skillFills.forEach(fill => {
                    const target = fill.getAttribute('data-width');
                    if (target) {
                        fill.style.width = '0%';
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                fill.style.width = target;
                            });
                        });
                    }
                });
            }
        }
    });
}

window.addEventListener('scroll', reveal);
setTimeout(reveal, 200);

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        const span = link.querySelector('span');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-brand');
            link.classList.remove('text-text-secondary');
            if (span) span.classList.remove('opacity-0');
        } else {
            link.classList.remove('text-brand');
            link.classList.add('text-text-secondary');
            if (span) span.classList.add('opacity-0');
        }
    });
});
