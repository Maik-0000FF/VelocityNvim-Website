/**
 * VelocityNvim — Main
 * Mobile menu, language toggle, copy-to-clipboard, scroll-reveal, auto-hide nav.
 */

import { initializeTemplates } from './template-loader.js';

let cachedNavLinks = null;
let cachedHamburger = null;
let cachedLang = null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileBreakpoint = window.matchMedia('(max-width: 640px)');

// ===== Mobile Menu =====
function toggleMobileMenu() {
    if (!cachedNavLinks) cachedNavLinks = document.getElementById('navLinks');
    if (!cachedHamburger) cachedHamburger = document.querySelector('.hamburger');
    cachedNavLinks?.classList.toggle('active');
    cachedHamburger?.classList.toggle('active');
    const isExpanded = cachedHamburger?.classList.contains('active') || false;
    cachedHamburger?.setAttribute('aria-expanded', String(isExpanded));
}

document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
    initializeTemplates(() => {
        initScrollReveal();
        initCountUp();
    });

    const navLinksContainer = document.getElementById('navLinks');
    if (navLinksContainer) {
        cachedNavLinks = navLinksContainer;
        cachedHamburger = document.querySelector('.hamburger');
        navLinksContainer.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && mobileBreakpoint.matches) {
                cachedNavLinks?.classList.remove('active');
                cachedHamburger?.classList.remove('active');
            }
        });
    }

    cachedLang = localStorage.getItem('velocityLang') || 'de';
    if (cachedLang === 'en') switchLanguage('en');

    const preloadStyle = document.getElementById('lang-preload');
    if (preloadStyle) preloadStyle.remove();

    document.documentElement.classList.add('js-loaded');

    initAutoHideNavbar();
});

// ===== Language =====
function switchLanguage(lang) {
    document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.lang-content.' + lang).forEach(el => el.classList.add('active'));

    const toggleBtn = document.querySelector('.nav-lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'de' ? 'EN' : 'DE';
        toggleBtn.setAttribute('data-lang', lang);
    }
    document.documentElement.lang = lang;
    cachedLang = lang;
    localStorage.setItem('velocityLang', lang);
}

function toggleLanguage() {
    switchLanguage(cachedLang === 'de' ? 'en' : 'de');
}

// ===== Theme =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('velocityTheme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#FFFFFF' : '#0A0D14');
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
}

// ===== Tab Switching (used on docs pages) =====
function switchTab(tabName, e) {
    const tabContent = document.getElementById(tabName);
    if (!tabContent) return;

    const parentSection = tabContent.closest('.install-section') || tabContent.parentElement;
    parentSection.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    parentSection.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    tabContent.classList.add('active');
    if (e && e.target) e.target.classList.add('active');
}

// ===== Copy to Clipboard =====
function copyInstallSnippet() {
    const block = document.querySelector('.install-section .code-block code');
    const feedback = document.getElementById('copy-feedback-install');
    if (block) copyToClipboard(block.innerText.trim(), feedback);
}

function copyOneliner(lang) {
    const onelinerElement = document.getElementById('oneliner-' + lang);
    const feedback = document.getElementById('copy-feedback-oneliner-' + lang);
    if (onelinerElement) copyToClipboard(onelinerElement.textContent, feedback);
}

function copyToClipboard(text, feedbackElement) {
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showCopyFeedback(feedbackElement))
            .catch(() => fallbackCopy(text, feedbackElement));
    } else {
        fallbackCopy(text, feedbackElement);
    }
}

function fallbackCopy(text, feedbackElement) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showCopyFeedback(feedbackElement);
    } catch (err) {
        console.error('Copy failed:', err);
    }
    document.body.removeChild(textarea);
}

function showCopyFeedback(el) {
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1600);
}

// ===== Auto-hide Navbar on Mobile =====
function initAutoHideNavbar() {
    const navbar = document.querySelector('.sticky-nav');
    if (!navbar) return;

    const SHOW_NEAR_TOP = 100;   // always visible near page top (px)
    const DELTA_HIDE    = 24;    // require this much downward delta to hide
    const DELTA_SHOW    = 48;    // require this much upward delta to re-show
    const IGNORE_DELTA  = 4;     // ignore scrolls smaller than this (jitter)

    let lastScrollTop = window.scrollY;
    let lastDirectionAnchor = lastScrollTop;
    let lastDirection = 0; // -1 up, +1 down, 0 none
    let ticking = false;

    function update() {
        ticking = false;

        if (!mobileBreakpoint.matches) {
            navbar.classList.remove('nav-hidden');
            return;
        }

        const scrollTop = window.scrollY;
        const delta = scrollTop - lastScrollTop;

        // Always show near top
        if (scrollTop < SHOW_NEAR_TOP) {
            navbar.classList.remove('nav-hidden');
            lastScrollTop = scrollTop;
            lastDirectionAnchor = scrollTop;
            lastDirection = 0;
            return;
        }

        // Ignore micro-jitter (iOS bounce, layout shifts on section reveal)
        if (Math.abs(delta) < IGNORE_DELTA) return;

        const direction = delta > 0 ? 1 : -1;

        // Direction change: reset the anchor so we measure from the turning point
        if (direction !== lastDirection) {
            lastDirectionAnchor = scrollTop;
            lastDirection = direction;
            lastScrollTop = scrollTop;
            return;
        }

        const distanceInDirection = Math.abs(scrollTop - lastDirectionAnchor);

        if (direction > 0 && distanceInDirection >= DELTA_HIDE) {
            navbar.classList.add('nav-hidden');
        } else if (direction < 0 && distanceInDirection >= DELTA_SHOW) {
            navbar.classList.remove('nav-hidden');
        }

        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });
}

// ===== Scroll Progress Bar =====
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    let ticking = false;
    function update() {
        const doc = document.documentElement;
        const scrolled = window.scrollY || doc.scrollTop;
        const max = (doc.scrollHeight - window.innerHeight);
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + '%';
        bar.style.opacity = scrolled > 40 ? '1' : '0';
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
}

// ===== Count-Up on Metrics =====
function initCountUp() {
    if (prefersReducedMotion.matches) return;

    const targets = document.querySelectorAll('.metric-value[data-count]');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.3 });

    targets.forEach(el => {
        // Find leading text node (before <span class="unit">)
        const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (textNode) {
            const prefix = el.dataset.prefix || '';
            textNode.nodeValue = prefix + '0';
        }
        observer.observe(el);
    });
}

function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    const prefix = el.dataset.prefix || '';
    const duration = 1100;
    const start = performance.now();
    const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (!textNode) return;

    function step(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        const value = Math.round(eased * target);
        textNode.nodeValue = prefix + value;
        if (t < 1) {
            requestAnimationFrame(step);
        } else {
            el.classList.add('count-done');
        }
    }
    requestAnimationFrame(step);
}

// ===== Scroll-Reveal =====
function initScrollReveal() {
    if (prefersReducedMotion.matches) return;

    // Hero handled separately via [data-stagger] CSS animation
    const targets = [
        ...document.querySelectorAll('.philosophy'),
        ...document.querySelectorAll('.features-section'),
        ...document.querySelectorAll('.stack-section'),
        ...document.querySelectorAll('.support-section'),
        ...document.querySelectorAll('.links-section'),
    ];

    targets.forEach(el => el.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    targets.forEach(el => observer.observe(el));
}

// ===== Globals =====
window.toggleMobileMenu = toggleMobileMenu;
window.switchLanguage = switchLanguage;
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
window.setTheme = setTheme;
window.switchTab = switchTab;
window.switchRequirementsTab = switchTab;
window.switchInstallTab = switchTab;
window.copyInstallSnippet = copyInstallSnippet;
window.copyOneliner = copyOneliner;
