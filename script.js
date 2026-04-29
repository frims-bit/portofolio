// Intro Loader
const introLoader = document.getElementById('intro-loader');
if (introLoader) {
    // Wait for the loader bar animation to complete (~2.3s total: 0.3s delay + 2s fill)
    setTimeout(() => {
        introLoader.classList.add('fade-out');
        setTimeout(() => introLoader.remove(), 700); // Remove after fade-out transition
    }, 2600);
}

// Typewriter Effect
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
    const phrases = ['Développeur', 'Admin Réseau', 'Passionné de la Tech'];
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
                setTimeout(typewrite, 1800); // Pause before deleting
                return;
            }
            setTimeout(typewrite, 80); // Typing speed
        } else {
            typewriterEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typewrite, 400); // Pause before next word
                return;
            }
            setTimeout(typewrite, 40); // Deleting speed
        }
    }

    // Start typewriter after the intro loader finishes
    setTimeout(typewrite, 3200);
}

// Gestion du thème (Dark/Light)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
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

// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

// Scroll Reveal + Skill bars (trigger once only)
const revealedSet = new WeakSet();

function reveal() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');

            // Animate skill bars only once
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
