/**
 * VelocityNvim Landing Page - Main JavaScript
 * Event Handlers, Tab Switching, Language Toggle, Copy Functions
 */

import { Icons, getIcon } from './icons.js';
import { initializeTemplates } from './template-loader.js';

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks?.classList.toggle('active');
    hamburger?.classList.toggle('active');
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load all templates first, then initialize scroll effects
    initializeTemplates(() => {
        // Initialize scroll hover effects after templates are loaded
        initScrollHoverEffects();
    });

    // Setup nav links close on mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.getElementById('navLinks')?.classList.remove('active');
                document.querySelector('.hamburger')?.classList.remove('active');
            }
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('velocityLang');
    if (savedLang && savedLang === 'en') {
        switchLanguage('en');
    }

    // Reinitialize scroll hover effects on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initScrollHoverEffects();
        }, 250);
    });

    // Initialize parallax effect for screenshot
    initParallaxEffect();
});

// ===== Scroll-based Hover Effects for Mobile =====
let scrollHoverObserver = null;

function initScrollHoverEffects() {
    const featureCards = document.querySelectorAll('.feature-card');
    const supportItems = document.querySelectorAll('.support-item');
    const heroScreenshot = document.querySelector('.hero-screenshot');
    const allCards = [...featureCards, ...supportItems];

    if (heroScreenshot) {
        allCards.push(heroScreenshot);
    }

    if (allCards.length === 0) {
        console.warn('No cards found for scroll hover effects');
        return;
    }

    // Disconnect existing observer if it exists
    if (scrollHoverObserver) {
        scrollHoverObserver.disconnect();
        scrollHoverObserver = null;
    }

    // Remove all scroll-hover-active classes
    allCards.forEach(card => {
        card.classList.remove('scroll-hover-active');
    });

    // Only activate on mobile screens
    if (window.innerWidth > 768) {
        console.log('Desktop detected - scroll hover effects disabled');
        return;
    }

    // Calculate rootMargin - card triggers hover when it reaches center (40% from top/bottom)
    // Add extra margin at top to account for fixed navbar on mobile
    const viewportHeight = window.innerHeight;
    const navbarHeight = 60; // Fixed navbar height on mobile
    const marginBottom = Math.round(viewportHeight * 0.4);
    const marginTop = Math.round(viewportHeight * 0.4) + navbarHeight;

    const observerOptions = {
        root: null,
        rootMargin: `-${marginTop}px 0px -${marginBottom}px 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1]
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

    const screenshotCount = heroScreenshot ? 1 : 0;
    console.log(`Scroll hover observer initialized for ${allCards.length} cards (${featureCards.length} features + ${supportItems.length} support + ${screenshotCount} screenshot)`);
}

// ===== Parallax Effect for Hero Screenshot =====
function initParallaxEffect() {
    const heroScreenshot = document.querySelector('.hero-screenshot');

    if (!heroScreenshot) {
        return;
    }

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.25; // Adjust speed (0.25 = moves at 1/4 scroll speed)
        const zoomSpeed = 0.0001; // Zoom speed (0.0001 = very subtle zoom)
        const rotationResetSpeed = 0.02; // Speed to reset rotation (0.02 = slow reset)
        const fadeSpeed = 0.001; // Speed of fade out (0.001 = very gradual)

        // Move screenshot up as user scrolls down
        const translateY = -(scrollY * parallaxSpeed);

        // Calculate scale - starts at 1 and increases with scroll
        const scale = 1 + (scrollY * zoomSpeed);

        // Calculate rotation - starts at 23deg and gradually resets to 0deg
        const rotationY = Math.max(0, 23 - (scrollY * rotationResetSpeed));

        // Calculate translateX - starts at 8% and reduces to 0% as rotation decreases
        // This keeps the screenshot centered as rotation changes
        const translateX = (rotationY / 23) * 8; // 8% at 23deg, 0% at 0deg

        // Calculate opacity - starts at 1 and fades to 0
        const opacity = Math.max(0, 1 - (scrollY * fadeSpeed));

        // Keep existing 3D transform and add translateY, scale, and dynamic rotation
        heroScreenshot.style.transform = `perspective(1000px) rotateY(${rotationY}deg) translateX(${translateX}%) translateY(${translateY}px) scale(${scale})`;
        heroScreenshot.style.opacity = opacity;
    });
}

// ===== Tab Switching =====
function switchTab(tabName) {
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
    event.target.classList.add('active');
}

function switchRequirementsTab(tabName) {
    switchTab(tabName);
}

function switchInstallTab(tabName) {
    switchTab(tabName);
}

// ===== Language Switching =====
function switchLanguage(lang) {
    // Hide all language content
    const langContents = document.querySelectorAll('.lang-content');
    langContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all navigation language buttons
    const navLangBtns = document.querySelectorAll('.nav-lang-btn');
    navLangBtns.forEach(btn => btn.classList.remove('active'));

    // Show selected language content
    const selectedContents = document.querySelectorAll('.lang-content.' + lang);
    selectedContents.forEach(content => content.classList.add('active'));

    // Add active class to selected language button
    if (lang === 'de') {
        document.querySelectorAll('.nav-lang-btn')[0]?.classList.add('active');
    } else {
        document.querySelectorAll('.nav-lang-btn')[1]?.classList.add('active');
    }

    // Save language preference
    localStorage.setItem('velocityLang', lang);
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


// ===== Export Functions for Global Access =====
window.toggleMobileMenu = toggleMobileMenu;
window.switchTab = switchTab;
window.switchRequirementsTab = switchRequirementsTab;
window.switchInstallTab = switchInstallTab;
window.switchLanguage = switchLanguage;
window.copyBitcoinAddress = copyBitcoinAddress;
window.copyOneliner = copyOneliner;
