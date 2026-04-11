/**
 * VelocityNvim Landing Page - Main JavaScript
 * Event Handlers, Tab Switching, Language Toggle, Copy Functions
 */

import { initializeTemplates } from './template-loader.js';

// ===== Cached DOM References & State =====
let cachedNavLinks = null;
let cachedHamburger = null;
let cachedLang = null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    if (!cachedNavLinks) cachedNavLinks = document.getElementById('navLinks');
    if (!cachedHamburger) cachedHamburger = document.querySelector('.hamburger');
    cachedNavLinks?.classList.toggle('active');
    cachedHamburger?.classList.toggle('active');
    const isExpanded = cachedHamburger?.classList.contains('active') || false;
    cachedHamburger?.setAttribute('aria-expanded', String(isExpanded));
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load all templates first, then initialize scroll effects
    initializeTemplates(() => {
        // Initialize scroll hover effects after templates are loaded
        initScrollHoverEffects();
        // Initialize parallax effect after templates are loaded
        initParallaxEffect();
        // Initialize scroll-reveal entrance animations
        initScrollReveal();
    });

    // Setup nav links close on mobile (use event delegation for better performance)
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

    // Load saved language preference (cache for later use)
    cachedLang = localStorage.getItem('velocityLang') || 'de';
    if (cachedLang === 'en') {
        switchLanguage('en');
    }

    // Remove inline language preload styles (JavaScript takes over)
    const preloadStyle = document.getElementById('lang-preload');
    if (preloadStyle) {
        preloadStyle.remove();
    }

    // Mark that JavaScript has loaded (allows CSS pre-rendering to be disabled)
    document.documentElement.classList.add('js-loaded');

    // Reinitialize scroll hover effects and parallax on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initScrollHoverEffects();
            initParallaxEffect();
        }, 250);
    }, { passive: true });

    // Fluid simulation on all devices (replaces floating logos)
    initFluidSimulation();

    // Initialize auto-hiding navbar on mobile
    initAutoHideNavbar();
});

// ===== Fluid Simulation =====
let fluidSimulationInstance = null;

function initFluidSimulation() {
    // Skip fluid simulation if user prefers reduced motion
    if (prefersReducedMotion.matches) {
        return;
    }

    const canvas = document.getElementById('fluid-canvas');
    if (!canvas) {
        console.warn('Fluid simulation canvas not found');
        return;
    }

    // Show canvas on all devices
    canvas.style.display = 'block';

    // Import and initialize
    import('./fluid-simulation.js').then(module => {
        fluidSimulationInstance = module.initFluidSimulation(canvas);
        window.fluidSimulation = fluidSimulationInstance;

        if (!fluidSimulationInstance) {
            console.warn('Fluid simulation failed to initialize');
        }
    });
}

// ===== Scroll-based Hover Effects for Mobile =====
let scrollHoverObserver = null;
let lastBreakpoint = null; // Track if we're on mobile or desktop

function initScrollHoverEffects() {
    // Read viewport height first (needed for rootMargin calculation)
    const viewportHeight = window.innerHeight;

    // Determine current breakpoint
    const currentBreakpoint = mobileBreakpoint.matches ? 'mobile' : 'desktop';

    // Only reinitialize if breakpoint changed (mobile ↔ desktop transition)
    const breakpointChanged = lastBreakpoint !== currentBreakpoint;

    // If already initialized and breakpoint hasn't changed, skip
    if (scrollHoverObserver && !breakpointChanged) {
        return;
    }

    lastBreakpoint = currentBreakpoint;

    const featureCards = document.querySelectorAll('.feature-card');
    const supportItems = document.querySelectorAll('.support-item');
    const heroScreenshot = document.querySelector('.hero-screenshot');
    const allCards = [...featureCards, ...supportItems];

    if (heroScreenshot) {
        allCards.push(heroScreenshot);
    }

    if (allCards.length === 0) {
        return;
    }

    // Disconnect existing observer if it exists
    if (scrollHoverObserver) {
        scrollHoverObserver.disconnect();
        scrollHoverObserver = null;
    }

    // Remove all scroll-hover-active classes (DOM writes after reads)
    allCards.forEach(card => {
        card.classList.remove('scroll-hover-active');
    });

    // Only activate on mobile screens
    if (currentBreakpoint === 'desktop') {
        return;
    }

    // Calculate rootMargin using pre-read viewport dimensions
    const navbarHeight = 60; // Fixed navbar height on mobile
    const marginBottom = Math.round(viewportHeight * 0.4);
    const marginTop = Math.round(viewportHeight * 0.4) + navbarHeight;

    const observerOptions = {
        root: null,
        rootMargin: `-${marginTop}px 0px -${marginBottom}px 0px`,
        threshold: 0.1 // Single threshold for better performance (was [0, 0.25, 0.5, 0.75, 1])
    };

    scrollHoverObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add hover class when card is in center zone of viewport
                entry.target.classList.add('scroll-hover-active');
            } else {
                // Remove hover class when scrolled out of center zone
                entry.target.classList.remove('scroll-hover-active');
            }
        });
    }, observerOptions);

    // Observe all cards (features + support)
    allCards.forEach(card => {
        scrollHoverObserver.observe(card);
    });

}

// ===== Parallax Effect for Hero Screenshot =====
function initParallaxEffect() {
    const heroScreenshot = document.querySelector('.hero-screenshot');

    if (!heroScreenshot) {
        return;
    }

    // Use matchMedia for reliable breakpoint detection
    const isMobile = mobileBreakpoint.matches;

    // Parallax effects for both desktop and mobile (throttled with rAF for performance)
    let parallaxTicking = false;

    // Adjust values for mobile (reduced for iOS Safari performance)
    const parallaxSpeed = isMobile ? 0.1 : 0.25;
    const zoomSpeed = isMobile ? 0 : 0.0001; // No zoom on mobile
    const rotationResetSpeed = isMobile ? 0.02 : 0.02;
    const fadeSpeed = isMobile ? 0.0006 : 0.001;
    const blurSpeed = isMobile ? 0 : 0.005; // No blur on mobile (expensive on iOS)
    const initialRotation = isMobile ? 15 : 23;

    function updateParallax() {
        const scrollY = window.scrollY;
        const translateY = -(scrollY * parallaxSpeed);
        const scale = isMobile ? 1 : 1 + (scrollY * zoomSpeed);
        const rotationY = Math.max(0, initialRotation - (scrollY * rotationResetSpeed));
        const translateX = isMobile ? 0 : 2 + (rotationY / 23) * 8;
        const opacity = Math.max(0, 1 - (scrollY * fadeSpeed));

        if (isMobile) {
            // Mobile: only opacity fade, no transform effects
            heroScreenshot.style.opacity = opacity;
        } else {
            const blur = scrollY * blurSpeed;
            heroScreenshot.style.transform = `perspective(1000px) rotateY(${rotationY}deg) translateX(${translateX}%) translateY(${translateY}px) scale(${scale})`;
            heroScreenshot.style.opacity = opacity;
            heroScreenshot.style.filter = `blur(${blur}px)`;
        }
        parallaxTicking = false;
    }

    window.addEventListener('scroll', function() {
        if (!parallaxTicking) {
            requestAnimationFrame(updateParallax);
            parallaxTicking = true;
        }
    }, { passive: true });
}

// ===== Tab Switching =====
function switchTab(tabName, e) {
    const tabContent = document.getElementById(tabName);
    if (!tabContent) return;

    const parentSection = tabContent.closest('.install-section');

    // Hide only tab contents within this section
    const contents = parentSection.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from only tabs within this section
    const tabs = parentSection.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab content
    tabContent.classList.add('active');

    // Add active class to clicked tab
    if (e && e.target) {
        e.target.classList.add('active');
    }
}

function switchRequirementsTab(tabName, e) {
    switchTab(tabName, e);
}

function switchInstallTab(tabName, e) {
    switchTab(tabName, e);
}

// ===== Language Switching =====
function switchLanguage(lang) {
    // Hide all language content
    const langContents = document.querySelectorAll('.lang-content');
    langContents.forEach(content => content.classList.remove('active'));

    // Show selected language content
    const selectedContents = document.querySelectorAll('.lang-content.' + lang);
    selectedContents.forEach(content => content.classList.add('active'));

    // Update toggle button text - show TARGET language (what you switch TO)
    const toggleBtn = document.querySelector('.nav-lang-toggle');
    if (toggleBtn) {
        const targetLang = lang === 'de' ? 'EN' : 'DE';
        toggleBtn.textContent = targetLang;
        toggleBtn.setAttribute('data-lang', lang);
    }

    // Update html lang attribute for accessibility and SEO
    document.documentElement.lang = lang;

    // Save language preference and update cache
    cachedLang = lang;
    localStorage.setItem('velocityLang', lang);
}

function toggleLanguage() {
    const newLang = cachedLang === 'de' ? 'en' : 'de';
    switchLanguage(newLang);
}

// ===== Copy to Clipboard Functions =====
function copyBitcoinAddress(lang) {
    const address = 'bc1q6gmpgfn4wx2hx2c3njgpep9tl00etma9k7w6d4';
    const feedback = document.getElementById('copy-feedback-' + lang);

    copyToClipboard(address, feedback);
}

function copyOneliner(lang) {
    const onelinerElement = document.getElementById('oneliner-' + lang);
    const command = onelinerElement?.textContent;
    const feedback = document.getElementById('copy-feedback-oneliner-' + lang);

    if (command) {
        copyToClipboard(command, feedback);
    }
}

function copyToClipboard(text, feedbackElement) {
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showCopyFeedback(feedbackElement);
        }).catch(function(err) {
            console.error('Copy failed:', err);
            fallbackCopy(text, feedbackElement);
        });
    } else {
        fallbackCopy(text, feedbackElement);
    }
}

function fallbackCopy(text, feedbackElement) {
    // Fallback for older browsers
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
        console.error('Fallback copy failed:', err);
    }

    document.body.removeChild(textarea);
}

function showCopyFeedback(feedbackElement) {
    if (!feedbackElement) return;

    feedbackElement.classList.add('show');
    setTimeout(function() {
        feedbackElement.classList.remove('show');
    }, 2000);
}

// ===== Auto-hiding Navbar on Mobile =====
function initAutoHideNavbar() {
    let lastScrollTop = 0;
    let scrollTimeout;
    const navbar = document.querySelector('.sticky-nav');

    if (!navbar) return;

    function handleNavbarScroll() {
        // Only on mobile
        if (!mobileBreakpoint.matches) {
            navbar.classList.remove('nav-hidden');
            return;
        }

        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Scrolling down & past threshold (100px)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('nav-hidden');
        } else {
            // Scrolling up or at top
            navbar.classList.remove('nav-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
    }

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleNavbarScroll, 10);
    }, { passive: true });
}


// ===== Scroll-Reveal Entrance Animations =====
let scrollRevealObserver = null;

function initScrollReveal() {
    // Skip all animations if user prefers reduced motion
    if (prefersReducedMotion.matches) {
        return;
    }

    // Hero entrance: staggered fade-in on page load
    const heroSubtitles = document.querySelectorAll('.hero-subtitle');
    const heroButtons = document.querySelectorAll('.hero-buttons');
    const heroElements = [...heroSubtitles, ...heroButtons];

    heroElements.forEach((el, i) => {
        el.classList.add('hero-entrance');
        el.style.transitionDelay = `${i * 100}ms`;
    });

    // Trigger hero entrance after a brief frame to allow CSS to register initial state
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            heroElements.forEach(el => {
                el.classList.add('hero-entrance-visible');
            });
        });
    });

    // Scroll-reveal for sections
    const featuresSections = document.querySelectorAll('.features-section');
    const donationSections = document.querySelectorAll('.donation-section');
    const linksContainer = document.getElementById('links-container');

    const revealSections = [...featuresSections, ...donationSections];
    if (linksContainer) revealSections.push(linksContainer);

    revealSections.forEach(el => {
        el.classList.add('scroll-reveal');
    });

    // IntersectionObserver for scroll-triggered reveals
    scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal-visible');
                // Stop observing after reveal (one-time animation)
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    });

    revealSections.forEach(el => {
        scrollRevealObserver.observe(el);
    });
}

// ===== Export Functions for Global Access =====
window.toggleMobileMenu = toggleMobileMenu;
window.switchTab = switchTab;
window.switchRequirementsTab = switchRequirementsTab;
window.switchInstallTab = switchInstallTab;
window.switchLanguage = switchLanguage;
window.toggleLanguage = toggleLanguage;
window.copyBitcoinAddress = copyBitcoinAddress;
window.copyOneliner = copyOneliner;
